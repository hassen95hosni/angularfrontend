import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
public href = "";
public rst = false ;

  constructor(private router : Router) {

   }

  ngOnInit() {
    this.href=this.router.url;
    console.log(this.href);
    if (this.href=="/user/sendinstruction/1"){
      this.rst=true
    }
    
    if (this.href=="/user/charts/1"){
      this.rst=false;
    }
    
  }

 nav(){
 
}
 } 

