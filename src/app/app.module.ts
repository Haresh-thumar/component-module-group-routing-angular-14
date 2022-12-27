import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';
/*-----------------------------------------------------------*/

@NgModule({
  declarations: [
    AppComponent,
    /*-----------*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*---------*/
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
