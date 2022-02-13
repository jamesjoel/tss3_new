import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SaperatorComponent } from './saperator/saperator.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SaperatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SaperatorComponent
  ]
})
export class SharedModule { }
