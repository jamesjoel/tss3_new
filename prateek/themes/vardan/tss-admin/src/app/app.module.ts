import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { DashboardInfoComponent } from './shared/dashboard-info/dashboard-info.component';
import { TransactionHistoryComponent } from './shared/transaction-history/transaction-history.component';
import { MessageBarComponent } from './shared/message-bar/message-bar.component';
import { JoinedComponent } from './pages/joined/joined.component';
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
import { LoginComponent } from './login/login.component';
import { OtherComponent } from './pages/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TopNavbarComponent,
    DashboardInfoComponent,
    TransactionHistoryComponent,
    MessageBarComponent,
    JoinedComponent,
    OtherComponent,
    EnquariesComponent,
    LoginComponent,
    EnquariesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
