import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Ping } from './ping';
import { MessagingService } from "../services/messaging.service";
import { Message } from "@stomp/stompjs";
import { StompState } from "@stomp/ng2-stompjs";
import {} from "@angular/router"
import { ActivatedRoute } from '@angular/router';

const WEBSOCKET_URL = "ws://localhost:1330/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";

@Component({
  selector: 'app-ping-list',
  templateUrl: './ping-list.component.html',
  styleUrls: ['./ping-list.component.css','assets/css/main.css'
  ,'assets/css/noscript.css']
})
export class PingListComponent implements OnInit {
  private messagingService: MessagingService;
  public msg = "";
  messageHistory = [];
  state: string = "NOT CONNECTED";
  private  pingss:  Array<Ping> = [];
 private user ;

  private  pings:  Array<Ping> = [];

  private test : Array<string>=[];
  constructor(private  apiService:  ApiService,private active : ActivatedRoute) {

    // Instantiate a messagingService
    this.messagingService = new MessagingService(WEBSOCKET_URL, EXAMPLE_URL);

    // Subscribe to its stream (to listen on messages)
    this.messagingService.stream().subscribe((message: Message) => {
      this.messageHistory.unshift(message.body);


       this.msg = JSON.stringify(message.body);
      //console.log(j);
      var a=new Ping("0","0","0");
      try{
      var x = this.msg.indexOf("average=");
      var y = this.msg.indexOf(",",x);
      a.average=this.msg.substring(x+8,y);

    }
    catch(err){
      console.log(err);
    }
    try {
      x = this.msg.indexOf("loss=")
      var y = this.msg.indexOf(",",x);
      a.loss=this.msg.substring(x+5,y);

    } catch (error) {

    }
     try {
      x=this.msg.indexOf("date=")
      y=this.msg.indexOf(",",x);
      a.date=this.msg.substring(x+5,y);

     } catch (error) {

     }

      this.pingss.unshift(a);

      console.log(message);
    });

    // Subscribe to its state (to know its connected or not)
    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });




   }

  ngOnInit() {
    this.getAllping();
  }
  public  getAllping(){
    this.active.paramMap.subscribe(params =>{
     this.user= params.get('name').substr(1)
     this.apiService.getAllpingchart(this.user).subscribe((data  :Array<string>) =>{
      console.log("new way data" +data);
      this.test  =  data;
      var i = 0;
      this.test.forEach(element => {//console.log(element);


        var j = JSON.stringify(element);
        //console.log(j);
        var a=new Ping("0","0","0");
        try{
        var x = j.indexOf("average=");
        var y = j.indexOf(",",x);
        a.average=j.substring(x+8,y);

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

       } catch (error) {

       }

        this.pings[i]=a;
        i=i+1;
       // console.log(this.users[i]);
      });
      console.log(data);
      this.pings.reverse();

    });



/*
    this.apiService.getAllping().subscribe(data => {
        this.test  =  data;
        var i = 0;
        this.test.forEach(element => {//console.log(element);


          var j = JSON.stringify(element);
          //console.log(j);
          var a=new Ping("0","0","0");
          try{
          var x = j.indexOf("average=");
          var y = j.indexOf(",",x);
          a.average=j.substring(x+8,y);

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

         } catch (error) {

         }

          this.pings[i]=a;
          i=i+1;
         // console.log(this.users[i]);
        });
        console.log(data);
        this.pings.reverse();
    });*/
});
  }}
