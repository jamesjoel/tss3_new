import { NgModule, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RestoComponent } from './resto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
        path : "dashboard",
        component : DashboardComponent,
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
        path : "add-item",
        component : AddItemComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "view-item",
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
