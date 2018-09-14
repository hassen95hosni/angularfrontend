import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
private user :Array<Object> = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getallUsers();
  }
public getallUsers ( ){
  this.apiService.getallUsers().subscribe((data :Array<Object>)=>{
    this.user =data;
    console.log(data);
  });
}
}
