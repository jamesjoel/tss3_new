import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeacherComponent } from './pages/teacher/teacher.component';


const routes: Routes = [
  
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "home2",
    component : Home2Component
  },
  {
    path :"service-page",
    component : ServicePageComponent
  },
  {
    path : "teacher",
    component: TeacherComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "signup",
    component : SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
