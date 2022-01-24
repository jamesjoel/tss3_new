import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import("./visiter/visiter.module").then(v=>v.VisiterModule)
  },
  {
    path : "emp",
    loadChildren : ()=> import("./emp/emp.module").then(e=>e.EmpModule)
  },
  {
    path : "company",
    loadChildren : ()=> import("./company/company.module").then(c=>c.CompanyModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import("./admin/admin.module").then(a=>a.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
