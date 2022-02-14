import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CompshopComponent } from './compshop/compshop.component';
const routes: Routes = [
  {
    path : "compshop",
    component : CompshopComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
