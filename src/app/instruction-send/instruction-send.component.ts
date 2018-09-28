import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Instruction } from './Instruction';
import { Observable } from 'rxjs';
import { MessagingService } from "../services/messaging.service";
import { Message } from "@stomp/stompjs";
import { StompState } from "@stomp/ng2-stompjs";


const WEBSOCKET_URL = "ws://localhost:1330/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";
@Component({
  selector: 'app-instruction-send',
  templateUrl: './instruction-send.component.html',
  styleUrls: ['./instruction-send.component.css','assets/css/main.css' 
  ,'assets/css/noscript.css']
})
export class InstructionSendComponent implements OnInit {
    private messagingService: MessagingService;
  public msg = "";
  messageHistory = [];
  state: string = "NOT CONNECTED";


    public firstNumber ;
    public secondNumber ;
    public thirdNumber : string;
    public forthNumber : string;
    public typeValue : string;
    public result:string;

  constructor(private apiservice : ApiService) {

 // Instantiate a messagingService
 this.messagingService = new MessagingService(WEBSOCKET_URL, EXAMPLE_URL);
    
 // Subscribe to its stream (to listen on messages)
 this.messagingService.stream().subscribe((message: Message) => {
   this.messageHistory.unshift(message.body);


   
   //console.log(j);
  
   

     var j = JSON.stringify(message.body);
     //console.log(j);
     var a=new Instruction("0","0","0","0","0");
     try{
     var x = j.indexOf("result=");
     var y = j.indexOf(",",x);
     a.result=j.substring(x+7,y);
this.result=this.result+a;

   }
   catch(err){
     console.log(err);
   }
  

console.log("our instruction"+a);

   
 });

 // Subscribe to its state (to know its connected or not)
 this.messagingService.state().subscribe((state: StompState) => {
   this.state = StompState[state];
 });


   }

  ngOnInit() {
      console.log("add:"+this.firstNumber+"."+this.secondNumber+"."+this.thirdNumber+"."+this.forthNumber+"type"+this.typeValue);
  }
  public createInStruction(z,y,w,x){
console.log(this.firstNumber);
    var  insstruction  = {
        sender:  "gnar",
        add:  "20.0.0.1",
    }
    ;
    this.result="nothing";
    var a = new Instruction("","",this.firstNumber+"."+this.secondNumber+"."+this.thirdNumber+"."+this.forthNumber,this.typeValue,this.result);
   a.type="tracert";
    console.log(a);
   
    this.apiservice.createInstruction(a).subscribe((response) => {
       
        console.log(response);

    });
    };
    
}
