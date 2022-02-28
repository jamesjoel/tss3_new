import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HelpComponent } from './pages/help/help.component';
import { Home2Component } from './pages/home2/home2.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { ChildParentComponent } from './pages/child-parent/child-parent.component';
import { ChildComponent } from './shared/child/child.component';
import { ProductComponent } from './pages/product/product.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { BonusPipe } from './pipes/bonus.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    Home2Component,
    ServicePageComponent,
    TeacherComponent,
    EmployeeComponent,
    FileUploadComponent,
    ChildParentComponent,
    ChildComponent,
    ProductComponent,
    DiscountPipe,
    BonusPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
