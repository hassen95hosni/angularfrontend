import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-chart-ping',
  templateUrl: './chart-ping.component.html',
  styleUrls: ['./chart-ping.component.css']
})
export class ChartPingComponent implements OnInit {
  private  ping:  Array<object> = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getAllpingchart();
  }
  public  getAllpingchart(){
    this.apiService.getAllpingchart().subscribe((data:  Array<object>) => {
        this.ping  =  data;
        console.log(data);
        
    });
}
}
