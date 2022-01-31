import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    RestoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule
  ]
})
export class RestoModule { }
