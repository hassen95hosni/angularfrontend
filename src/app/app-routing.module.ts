import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {AllUserComponent} from 'src/app/all-user/all-user.component'
import {ChartPingComponent} from 'src/app/chart-ping/chart-ping.component'
import {PingListComponent} from 'src/app/ping-list/ping-list.component'
import{GetUserByNameComponent} from 'src/app/get-user-by-name/get-user-by-name.component'
import{InstructionSendComponent} from 'src/app/instruction-send/instruction-send.component'
import{ChartsAndpingComponent} from 'src/app/charts-andping/charts-andping.component'
import {AppComponent} from 'src/app/app.component'
import {InitialAdresseComponent} from './initial-adresse/initial-adresse.component'
const routes: Routes = [
  { path: '', component: AllUserComponent },
  {path:'user/:name',component:GetUserByNameComponent},
  {path:'chartping/:name',component:ChartPingComponent},
  {path:'pinglist/:name',component:PingListComponent},
 {path:'user/sendinstruction/:name',component:InstructionSendComponent},
 {path:'user/charts/:name',component:ChartsAndpingComponent}
 ,
 {path:'user/change/:name',component:InitialAdresseComponent}
 //,{path:'/root',component:AppComponent}
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
