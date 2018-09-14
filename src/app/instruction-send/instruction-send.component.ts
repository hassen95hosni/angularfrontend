import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-instruction-send',
  templateUrl: './instruction-send.component.html',
  styleUrls: ['./instruction-send.component.css']
})
export class InstructionSendComponent implements OnInit {

  constructor(private apiservice : ApiService) { }

  ngOnInit() {
  }
  createContact(){

    var  instruction  = {
        sender:  "gnar",
        add:  "20.0.0.1",
        
    };
    this.apiservice.createInstruction(instruction).subscribe((response) => {
        console.log(response);
    });
    };
    
}
