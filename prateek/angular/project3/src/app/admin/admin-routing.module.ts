import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListRestaurentComponent } from './pages/list-restaurent/list-restaurent.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : DashboardComponent
      },
      {
        path : "listresto",
        component : ListRestaurentComponent
      },
      {
        path : "listuser",
        component : ListUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
