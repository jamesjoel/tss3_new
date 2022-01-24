import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp.component';
import { DashComponent } from './pages/dash/dash.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyResumeComponent } from './pages/my-resume/my-resume.component';

const routes: Routes = [
  {
    path : "",
    component : EmpComponent,
    children : [
      {
        path : "",
        component : DashComponent
      },
      {
        path : "my-account",
        component : MyAccountComponent
      },
      {
        path : "my-resume",
        component : MyResumeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
