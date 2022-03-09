import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { DashboardInfoComponent } from './shared/dashboard-info/dashboard-info.component';
import { TransactionHistoryComponent } from './shared/transaction-history/transaction-history.component';
import { MessageBarComponent } from './shared/message-bar/message-bar.component';
import { JoinedComponent } from './pages/joined/joined.component';
<<<<<<< HEAD
=======
import { OtherComponent } from './pages/other/other.component';
>>>>>>> c0db071ff2bd05026cc50dd61a06185851964c0a
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
import { LoginComponent } from './login/login.component';

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
<<<<<<< HEAD
=======
    OtherComponent,
<<<<<<< HEAD
    EnquariesComponent,
    LoginComponent
=======
>>>>>>> c0db071ff2bd05026cc50dd61a06185851964c0a
    EnquariesComponent
>>>>>>> 1c94e969a6ffa47bc3df84c59523ba09ef11e5f1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
