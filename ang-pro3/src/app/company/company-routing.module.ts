import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { ApplyListComponent } from './pages/apply-list/apply-list.component';
import { DashComponent } from './pages/dash/dash.component';
import { MyVaccancyComponent } from './pages/my-vaccancy/my-vaccancy.component';

const routes: Routes = [
  {
    path : "",
    component : CompanyComponent,
    children : [
      {
        path : "",
        component : DashComponent
      },
      {
        path : "my-vaccancy",
        component : MyVaccancyComponent
      },
      {
        path : "apply-list",
        component: ApplyListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
