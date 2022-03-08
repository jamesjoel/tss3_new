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
<<<<<<< HEAD
    path : "other",
    component : OtherComponent
=======
    path : "enquaries",
    component : EnquariesComponent
>>>>>>> a2fa67bd11d11d8193db77974d4000936f4ecc9d
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
