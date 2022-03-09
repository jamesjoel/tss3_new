import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
import { JoinedComponent } from './pages/joined/joined.component';


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
    path : "enquaries",
    component : EnquariesComponent
<<<<<<< HEAD
=======
  },
  {
    path : "other",
<<<<<<< HEAD
  component : OtherComponent
  },
  {
    path : "",
  component : LoginComponent
=======
    component : OtherComponent
>>>>>>> c0db071ff2bd05026cc50dd61a06185851964c0a
>>>>>>> 1c94e969a6ffa47bc3df84c59523ba09ef11e5f1
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
