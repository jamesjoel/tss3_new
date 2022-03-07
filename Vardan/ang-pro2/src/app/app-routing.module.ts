import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { LoginComponent } from './pages/login/login.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AntibackdoorGuard } from './guard/antibackdoor.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';




const routes: Routes = [
  
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "fileupload",
    component : FileUploadComponent
  },
 
  {
    path :"service-page",
    component : ServicePageComponent
    
  },
  {
    path :"profile",
    component : ProfileComponent,
    canActivate :[BackdoorGuard]
  },
  {
    path :"login",
    component : LoginComponent,
    canActivate : [AntibackdoorGuard]
  },
  
  {
    path : "signup",
    component : SignupComponent,
    canActivate : [AntibackdoorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
