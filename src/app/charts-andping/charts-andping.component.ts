import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-charts-andping',
  templateUrl: './charts-andping.component.html',
  styleUrls: ['./charts-andping.component.css']
})
export class ChartsAndpingComponent implements OnInit {
public name ;
  constructor(private active : ActivatedRoute) { }

  ngOnInit() {
    this.active.paramMap
    .subscribe(params => {
          console.log("params"+params);
         this.name = params.get('name');
         this.name = this.name.substr(1);
    });
  }

}
