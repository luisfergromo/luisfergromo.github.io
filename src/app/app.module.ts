import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AngularLandingComponent } from './angular-landing/angular-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AngularLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    //LandingComponent
  ]
})
export class AppModule { }
