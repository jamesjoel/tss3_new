import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RestoComponent } from './resto.component';

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
    }
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
