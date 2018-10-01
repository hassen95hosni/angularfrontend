import { Component, OnInit } from '@angular/core';
import{User} from './../all-user/user'
import{ApiService} from './../api.service'
@Component({
  selector: 'app-initial-adresse',
  templateUrl: './initial-adresse.component.html',
  styleUrls: ['./initial-adresse.component.css']
})
export class InitialAdresseComponent implements OnInit {
  public firstNumber ;
  public secondNumber ;
  public thirdNumber : string;
  public forthNumber : string;
  private user :User;

  constructor(private apiservice :ApiService) { }

  ngOnInit() {
   
  }
  public getuserByName(name){
    this.apiservice.getUserbyName(name).subscribe(data=>{
      var j = JSON.stringify(data);
    var a = new User("0","0","0","0","0","0","0");
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
     try {
      x=j.indexOf("initialaddresse=")
      y=j.indexOf("}",x);
      a.initialaddresse=j.substring(x+16,y);  
       
     } catch (error) {
       
     }
     a.initialaddresse=this.firstNumber+"."+this.secondNumber+"."+this.thirdNumber+"."+this.forthNumber;
    this.user=a;
    this.apiservice.updateuser(JSON.stringify(this.user));
    });
    console.log(this.user);
    }
      
  }


