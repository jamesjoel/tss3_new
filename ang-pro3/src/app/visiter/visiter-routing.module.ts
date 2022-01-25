import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { VisiterComponent } from './visiter.component';

const routes: Routes = [
  {
    path : "",
    component : VisiterComponent,
    children : [
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiterRoutingModule { }
