import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashComponent } from './pages/dash/dash.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashComponent,
    EmpListComponent,
    CompanyListComponent,
    MyAccountComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
