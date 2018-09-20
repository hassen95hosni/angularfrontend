import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Instruction } from './Instruction';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-instruction-send',
  templateUrl: './instruction-send.component.html',
  styleUrls: ['./instruction-send.component.css','assets/css/main.css' 
  ,'assets/css/noscript.css']
})
export class InstructionSendComponent implements OnInit {
    public firstNumber ;
    public secondNumber ;
    public thirdNumber : string;
    public forthNumber : string;
    public typeValue : string;

  constructor(private apiservice : ApiService) { }

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
    var a = new Instruction("","",this.firstNumber+"."+this.secondNumber+"."+this.thirdNumber+"."+this.forthNumber);
    console.log(a);
    this.apiservice.createInstruction(a).subscribe((response) => {
       
        console.log(response);
    });
    };
    
}
