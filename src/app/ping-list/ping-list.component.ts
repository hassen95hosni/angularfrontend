import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-ping-list',
  templateUrl: './ping-list.component.html',
  styleUrls: ['./ping-list.component.css']
})
export class PingListComponent implements OnInit {
  private  ping:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getAllping();
  }
  public  getAllping(){
    this.apiService.getAllping().subscribe((data:  Array<object>) => {
        this.ping  =  data;
        console.log(data);
    });
}
}
