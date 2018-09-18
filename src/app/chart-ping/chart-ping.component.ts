import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-chart-ping',
  templateUrl: './chart-ping.component.html',
  styleUrls: ['./chart-ping.component.css','assets/css/main.css' 
  ,'assets/css/noscript.css']
})
export class ChartPingComponent implements OnInit {
  private  ping:  Array<object> = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    
  }
  public  getAllpingchart(){
    var  user  = {
      name:  "gnar",
      mac:"526"
  };
    this.apiService.getAllpingchart(user).subscribe((data:  Array<object>) => {
        this.ping  =  data;
        console.log(data);
        
    });
}
}
