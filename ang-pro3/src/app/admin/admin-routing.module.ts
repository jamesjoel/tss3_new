import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { DashComponent } from './pages/dash/dash.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : DashComponent
      },
      {
        path : "emp-list",
        component : EmpListComponent
      },
      {
        path : "company-list",
        component : CompanyListComponent
      },
      {
        path : "my-account",
        component : MyAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
