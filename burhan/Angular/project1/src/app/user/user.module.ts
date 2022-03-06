import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './user.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    FileUploadComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
