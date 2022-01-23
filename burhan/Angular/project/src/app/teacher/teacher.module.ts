import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ProfileComponent,
    SalaryComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
