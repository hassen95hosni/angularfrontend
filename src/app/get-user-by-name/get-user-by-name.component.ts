import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {User} from 'src/app/all-user/user'

@Component({
  selector: 'app-get-user-by-name',
  templateUrl: './get-user-by-name.component.html',
  styleUrls: ['./get-user-by-name.component.css','assets/css/main.css' 
  ,'assets/css/noscript.css']
})
export class GetUserByNameComponent implements OnInit {
private user : User;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }
public getuserByName(name){
this.apiService.getUserbyName(name).subscribe(data=>{var j = JSON.stringify(data);
var a = new User("0","0","0","0");
try{
  var x = j.indexOf("id=");
  
  a.id=j.substring(x+3,x+39);
  
}
catch(err){
  console.log(err);
}
try {
  x = j.indexOf("name=")
  var y = j.indexOf(",",x);
  a.name=j.substring(x+5,y);
   
} catch (error) {
  
}
 try {
  x=j.indexOf("macs=")
  y=j.indexOf("],",x);
  a.macs=j.substring(x+5,y+1);
   
 } catch (error) {
   
 }
 try {
  x=j.indexOf("ipAddresse=")
  y=j.indexOf("}",x);
  a.ipaddresse=j.substring(x+11,y);  
   
 } catch (error) {
   
 }
this.user=a;
});
console.log(this.user);
}
}
