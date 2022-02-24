import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { DashComponent } from './pages/dash/dash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LeftNavComponent } from './shared/left-nav/left-nav.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';


@NgModule({
  declarations: [
    RestoComponent,
    DashComponent,
    LoginComponent,
    SignupComponent,
    LeftNavComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewItemComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RestoModule { }
