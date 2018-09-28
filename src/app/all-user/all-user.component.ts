import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {User} from 'src/app/all-user/user'
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: [
  
  //'./all-user.component.css',
  './assets/css/main.css',
  './assets/css/font-awesome.min.css',
  './assets/css/noscript.css',
  './assetss/css/main.css',
  //'../../assets.1/css/main.css','../../assets.1/css/noscript.css'
]
})
export class AllUserComponent implements OnInit {
private users :Array<User> = [];
private test :Array<string> = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getallUsers();

  }
public getallUsers ( ){
  this.apiService.getallUsers().subscribe(data=> {//console.log("data"+data);
  this.test =data;
  var i = 0;
  this.test.forEach(element => {//console.log(element);
    
    
    var j = JSON.stringify(element);
    //console.log(j);
    var a=new User("0","0","0","0");
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
    
    this.users[i]=a;
    i=i+1;
   // console.log(this.users[i]);
  });  
 
console.log("all users "+this.users);   
//this.users.forEach(element => {
  //console.log(element);
 // console.log(element.ipaddresse);
//}); 
});
   


    //console.log(this.users);
 
}
}
