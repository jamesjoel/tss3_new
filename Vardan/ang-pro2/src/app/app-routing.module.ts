import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { LoginComponent } from './pages/login/login.component';




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
    path :"service-page",
    component : ServicePageComponent
  },
  {
    path :"login",
    component : LoginComponent
  },
  
  {
    path : "signup",
    component : SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
