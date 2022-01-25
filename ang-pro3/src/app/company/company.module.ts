import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { DashComponent } from './pages/dash/dash.component';
import { MyVaccancyComponent } from './pages/my-vaccancy/my-vaccancy.component';
import { ApplyListComponent } from './pages/apply-list/apply-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    CompanyComponent,
    DashComponent,
    MyVaccancyComponent,
    ApplyListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
