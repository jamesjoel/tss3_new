import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
import { JoinedComponent } from './pages/joined/joined.component';
import { OtherComponent } from './pages/other/other.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },
  {
    path : "joined",
    component : JoinedComponent
  },
  {
    path : "enquaries",
    component : EnquariesComponent
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
