import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeeComponent } from './pages/fee/fee.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    StudentComponent,
    ContactComponent,
    FeeComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
