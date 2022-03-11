import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './user.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RestoSignupComponent } from './pages/resto-signup/resto-signup.component';
import { RestoLoginComponent } from './pages/resto-login/resto-login.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { ServiceComponent } from './pages/service/service.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    RestoSignupComponent,
    RestoLoginComponent,
    FileUploadComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
