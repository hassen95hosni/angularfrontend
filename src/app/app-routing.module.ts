import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AllUserComponent} from 'src/app/all-user/all-user.component'
import {ChartPingComponent} from 'src/app/chart-ping/chart-ping.component'
import {PingListComponent} from 'src/app/ping-list/ping-list.component'
import{GetUserByNameComponent} from 'src/app/get-user-by-name/get-user-by-name.component'
import{InstructionSendComponent} from 'src/app/instruction-send/instruction-send.component'
const routes: Routes = [
  { path: 'allusers', component: AllUserComponent },
  {path:'chartping/:name',component:ChartPingComponent},
  {path:'pinglist/:name',component:PingListComponent},
  {path:'user/:name',component:GetUserByNameComponent},
  {path:'sendinstruction/:name',component:InstructionSendComponent}
];

@NgModule({
  imports: [
    CommonModule
    //,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
