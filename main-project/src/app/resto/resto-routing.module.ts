import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RestoComponent } from './resto.component';

import { BackdoorGuard } from './guard/backdoor.guard';

const routes: Routes = [
  {
    path : "",
    component : RestoComponent,
    children : [
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SignupComponent
      },
      {
        path : "dash",
        component : DashComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
