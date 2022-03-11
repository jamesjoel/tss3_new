import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
import { JoinedComponent } from './pages/joined/joined.component';
import { OtherComponent } from './pages/other/other.component';
import { BackdoorGuard } from './guard/backdoor.guard';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [BackdoorGuard]
  },
  {
    path : "joined",
    component : JoinedComponent,
    canActivate : [BackdoorGuard]
  },
  {
    path : "enquaries",
    component : EnquariesComponent,
    canActivate : [BackdoorGuard]

  },
  {
    path : "other",
  component : OtherComponent,
  canActivate : [BackdoorGuard]
  },
  {
    path : "",
  component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
