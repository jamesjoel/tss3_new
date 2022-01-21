import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { H10Component } from './h10/h10.component';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component,
    H10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
