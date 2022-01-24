import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SalaryComponent } from './pages/salary/salary.component';

const routes: Routes = [
  {
    path : "",
    component : TeacherComponent,
    children : [
      {
        path : "Profile",
        component : ProfileComponent
      },
      {
        path : "Salary",
        component : SalaryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
