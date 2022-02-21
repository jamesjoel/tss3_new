import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeftNavComponent } from './shared/left-nav/left-nav.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { AddItemComponent } from './pages/add-item/add-item.component';


@NgModule({
  declarations: [
    RestoComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    LeftNavComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewItemComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
})
export class RestoModule { }
