import { Ping } from '../ping-list/ping';
import { Component, OnInit,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ApiService } from  '../api.service';
import {Chart} from 'chart.js';
import { MessagingService } from "../services/messaging.service";
import { Message } from "@stomp/stompjs";
import { StompState } from "@stomp/ng2-stompjs";


const WEBSOCKET_URL = "ws://localhost:1330/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";

@Component({
  selector: 'app-chart-ping',
  templateUrl: './chart-ping.component.html',
  styleUrls: ['./chart-ping.component.css','assets/css/main.css'
  ,'assets/css/noscript.css']
})
export class ChartPingComponent implements OnInit {


  private messagingService: MessagingService;
  public msg = "";
  messageHistory = [];
  state: string = "NOT CONNECTED";



  @ViewChild('canvas') canvas: ElementRef;
  private  ping:  Array<string> = [];
  private  pings:  Array<Ping> = [];
  dates = [''];
  datess = ['try'];
  averages = [1];
  averagess = [1];
chart: [''];

  constructor(private apiService : ApiService) { 

    // Instantiate a messagingService
    this.messagingService = new MessagingService(WEBSOCKET_URL, EXAMPLE_URL);
    
        // Subscribe to its stream (to listen on messages)
        this.messagingService.stream().subscribe((message: Message) => {
          this.messageHistory.unshift(message.body);
    
    
          
          //console.log(j);
         
          
  
            var j = JSON.stringify(message.body);
            //console.log(j);
            var a=new Ping("0","0","0");
            try{
            var x = j.indexOf("average=");
            var y = j.indexOf(",",x);
            a.average=j.substring(x+8,y);
  
              this.averages.push(Number(j.substring(x+8,y)));
              this.averages=this.averages.slice(0,15);
  
          }
          catch(err){
            console.log(err);
          }
          try {
            x = j.indexOf("loss=")
            var y = j.indexOf(",",x);
            a.loss=j.substring(x+5,y);
  
          } catch (error) {
  
          }
           try {
            x=j.indexOf("date=")
            y=j.indexOf(",",x);
            a.date=j.substring(x+5,y);

            this.dates.push(j.substring(x+5,y));
            this.dates=this.dates.slice(0,15);
  
           } catch (error) {
  
           }
  
            
            //this.dates.push(pings[i].)
            //console.log(this.pings[i]);
          
           // var ch = new Chart(this.canvas.nativeElement.getContext('2d'));
           // console.log(ch);
            //ch.Line(this.averages);
           // this.ch.data.datasets.array.forEach((dataset) => {
               // dataset.data.push(this.averages);
  
            //  });
           // console.log("our dates"+this.dates+this.averages);
          
  
         // console.log("our dates"+this.dates+this.averages);
       //adding realtime
          //  this.chart.data.datasets.array.forEach((dataset) => {
          //  dataset.data.push(this.averages);
  
         // });
        /*  var i = 0;
         for (i = 0; i < 10; i++) { 
           if(this.averagess.length>9){
             while(this.averagess.length>9){
               this.averagess.pop();
             }
             
          this.averagess.push(this.averages[i]);
          
           }
           if(this.datess.length>9){
             while(this.datess.length>9){
               this.datess.pop();
             }
             
          this.datess.push(this.dates[i]);
          
           }
         }
       console.log("averages"+this.averagess+this.datess); */ 
       console.log("our dates"+this.dates+this.averages);
       this.chart=this.cretachart();
          
        });
    
        // Subscribe to its state (to know its connected or not)
        this.messagingService.state().subscribe((state: StompState) => {
          this.state = StompState[state];
        });
    
  }

  ngOnInit() {
   
this.getAllpingchart(this.chart);


  }
  public update(chart , data ){

  }
  public cretachart(){
    console.log("blah"+this.averagess+this.datess)
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'),{
      type: 'line',
      data: {
          labels :this.dates,
         // labels:["first","second","third","forth"],
          datasets: [
            {
              data : this.averages,
            //  data :[1,2,9,4],
              borderColor : '#666666',
              fill : true
            },
          ]
      },
      options: {
        scales : {
          xAxes: [{
            display: true
          }],
          yAxes : [{
            display : true
          }]
        }
      }
    });
    return this.chart;
  }
  public  getAllpingchart(chart){
     
    this.apiService.getAllping().subscribe((data:  Array<string>) => {
        this.ping  =  data;

        //console.log("our data "+this.ping);
        var i = 0;
        this.ping.forEach(element => {//console.log(element);


          var j = JSON.stringify(element);
          //console.log(j);
          var a=new Ping("0","0","0");
          try{
          var x = j.indexOf("average=");
          var y = j.indexOf(",",x);
          a.average=j.substring(x+8,y);

            this.averages.push(Number(j.substring(x+8,y)));

        }
        catch(err){
          console.log(err);
        }
        try {
          x = j.indexOf("loss=")
          var y = j.indexOf(",",x);
          a.loss=j.substring(x+5,y);

        } catch (error) {

        }
         try {
          x=j.indexOf("date=")
          y=j.indexOf(",",x);
          a.date=j.substring(x+5,y);
          this.dates.push(j.substring(x+5,y));

         } catch (error) {

         }

          this.pings[i]=a;
          //this.dates.push(pings[i].)
          //console.log(this.pings[i]);
          i=i+1;
         // var ch = new Chart(this.canvas.nativeElement.getContext('2d'));
         // console.log(ch);
          //ch.Line(this.averages);
         // this.ch.data.datasets.array.forEach((dataset) => {
             // dataset.data.push(this.averages);

          //  });
         // console.log("our dates"+this.dates+this.averages);
        });

       // console.log("our dates"+this.dates+this.averages);
     //adding realtime
        //  this.chart.data.datasets.array.forEach((dataset) => {
        //  dataset.data.push(this.averages);

       // });
      /*  var i = 0;
       for (i = 0; i < 10; i++) { 
         if(this.averagess.length>9){
           while(this.averagess.length>9){
             this.averagess.pop();
           }
           
        this.averagess.push(this.averages[i]);
        
         }
         if(this.datess.length>9){
           while(this.datess.length>9){
             this.datess.pop();
           }
           
        this.datess.push(this.dates[i]);
        
         }
       }
     console.log("averages"+this.averagess+this.datess); */ 
     console.log("our dates"+this.dates+this.averages);
     this.chart=this.cretachart();
    });
   
  //chart.data.dataset.push(this.averages);
 // chart.data.labels.push(this.dates);
 // chart.update();
   // this.averagess=this.averages.slice(0).slice(10);
   // this.datess=this.dates.slice(0).slice(10);
//this.averagess.push(2);
  
  
}
}
