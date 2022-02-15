import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RestoComponent } from './resto.component';

import { BackdoorGuard } from './guard/backdoor.guard';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';

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
      },
      {
        path : "add-category",
        component : AddCategoryComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "view-category",
        component : ViewCategoryComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "add-items",
        component : AddItemComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "view-items",
        component : ViewItemComponent,
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
