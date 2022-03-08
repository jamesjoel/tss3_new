import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JoinedComponent } from './pages/joined/joined.component';
import { OtherComponent } from './pages/other/other.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "joined",
    component : JoinedComponent
  },
  {
    path : "other",
    component : OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
