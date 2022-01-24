import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeeComponent } from './pages/fee/fee.component';

const routes: Routes = [
  {
    path : "",
    component : StudentComponent,
    children : [
      {
        path : "",
        component : AboutusComponent
      },
      {
        path : "",
        component : ContactComponent
      },
      {
        path : "",
        component : FeeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
