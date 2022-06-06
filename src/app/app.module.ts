import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrangingAlertComponent } from './wranging-alert/wranging-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WrangingAlertComponent,
    SuccessAlertComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
