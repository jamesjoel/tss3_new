import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiterRoutingModule } from './visiter-routing.module';


import { VisiterComponent } from './visiter.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    VisiterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VisiterRoutingModule
  ]
})
export class VisiterModule { }
