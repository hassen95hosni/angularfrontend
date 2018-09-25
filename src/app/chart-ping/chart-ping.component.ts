import { Ping } from '../ping-list/ping';
import { Component, OnInit,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ApiService } from  '../api.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart-ping',
  templateUrl: './chart-ping.component.html',
  styleUrls: ['./chart-ping.component.css','assets/css/main.css'
  ,'assets/css/noscript.css']
})
export class ChartPingComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  private  ping:  Array<string> = [];
  private  pings:  Array<Ping> = [];
  dates = [''];
  averages = [1];
chart: [''];

  constructor(private apiService : ApiService) { }

  ngOnInit() {

this.getAllpingchart();

  }
  public  getAllpingchart(){
     this.chart = new Chart(this.canvas.nativeElement.getContext('2d'),{
      type: 'line',
      data: {
          labels :this.dates,
          datasets: [
            {
              data : this.averages,
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
    this.apiService.getAllping().subscribe((data:  Array<string>) => {
        this.ping  =  data;

        console.log("our data "+this.ping);
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
          var ch = new Chart(this.canvas.nativeElement.getContext('2d'));
          console.log(ch);
          //ch.Line(this.averages);
         // this.ch.data.datasets.array.forEach((dataset) => {
             // dataset.data.push(this.averages);

          //  });
          console.log("our dates"+this.dates+this.averages);
        });

       // console.log("our dates"+this.dates+this.averages);
     //adding realtime
        //  this.chart.data.datasets.array.forEach((dataset) => {
        //  dataset.data.push(this.averages);

       // });
    });

    //console.log("our dates"+this.dates+this.averages);

}
}
