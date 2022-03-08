import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { OtherComponent } from './pages/other/other.component';
=======
import { EnquariesComponent } from './pages/enquaries/enquaries.component';
>>>>>>> a2fa67bd11d11d8193db77974d4000936f4ecc9d

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
    OtherComponent
=======
    EnquariesComponent
>>>>>>> a2fa67bd11d11d8193db77974d4000936f4ecc9d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
