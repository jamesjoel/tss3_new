import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicePageComponent } from '../pages/service-page/service-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children :[
      {
        path : "",
        component :HomeComponent
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
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]

      },
      {
        path : "profile",
        component : ProfileComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
