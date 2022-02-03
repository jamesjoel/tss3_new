import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './shared/service/service.component';
import { ReservationComponent } from './shared/reservation/reservation.component';
import { RestoGalleryComponent } from './shared/resto-gallery/resto-gallery.component';
import { MasterChefComponent } from './shared/master-chef/master-chef.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ReservationComponent,
    RestoGalleryComponent,
    MasterChefComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
