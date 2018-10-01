import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { BarChartDemoComponent } from './app-bar-chart-demo/app-bar-chart-demo.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ChartPingComponent } from './chart-ping/chart-ping.component';
import { PingListComponent } from './ping-list/ping-list.component';
import { InstructionSendComponent } from './instruction-send/instruction-send.component';
import { GetUserByNameComponent } from './get-user-by-name/get-user-by-name.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ChartsAndpingComponent } from './charts-andping/charts-andping.component';
import { InitialAdresseComponent } from './initial-adresse/initial-adresse.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartDemoComponent,
    AllUserComponent,
    ChartPingComponent,
    PingListComponent,
    InstructionSendComponent,
    GetUserByNameComponent,
    NavigationComponent,
    ChartsAndpingComponent,
    InitialAdresseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
    ,FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent,GetUserByNameComponent]

})
export class AppModule { }
