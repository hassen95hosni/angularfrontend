import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
public href = "";
public rst = false ;
public name ;
  constructor(private router : Router,private activated :ActivatedRoute) {

   }

  ngOnInit() {
    this.activated.paramMap.subscribe(params => {
      
      this.name = params.get('name').substr(1); 
    });
    this.href=this.router.url;
    console.log(this.href);
    if (this.href.includes("/user/sendinstruction/")){
      this.rst=true
    }
    
    if (this.href=="/user/charts/1"){
      this.rst=false;
    }
    
  }

 nav(){
 
}
 } 

