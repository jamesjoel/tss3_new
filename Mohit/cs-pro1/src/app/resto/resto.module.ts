import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { DashComponent } from './pages/dash/dash.component';


@NgModule({
  declarations: [
    RestoComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule
  ]
})
export class RestoModule { }
