import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Ping } from './ping';
@Component({
  selector: 'app-ping-list',
  templateUrl: './ping-list.component.html',
  styleUrls: ['./ping-list.component.css','assets/css/main.css' 
  ,'assets/css/noscript.css']
})
export class PingListComponent implements OnInit {
  private  pings:  Array<Ping> = [];
  private test : Array<string>=[];
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getAllping();
  }
  public  getAllping(){
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
    });
}
}
