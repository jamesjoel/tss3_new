import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
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
      },
      {
        path : "file-upload",
        component : FileUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
