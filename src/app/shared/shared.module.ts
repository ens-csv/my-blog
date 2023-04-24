import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    bootstrapApplication,
    AppComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DatePipe,
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    FooterComponent
  ]
})
export class SharedModule { }
