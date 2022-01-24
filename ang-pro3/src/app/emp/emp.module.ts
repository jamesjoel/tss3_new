import { NgModule } from '@angular/core';

import { EmpRoutingModule } from './emp-routing.module';

import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp.component';
import { DashComponent } from './pages/dash/dash.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyResumeComponent } from './pages/my-resume/my-resume.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    EmpComponent,
    DashComponent,
    MyAccountComponent,
    MyResumeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule
  ]
})
export class EmpModule { }
