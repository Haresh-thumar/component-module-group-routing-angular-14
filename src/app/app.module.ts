import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*-----------------------------------------------------------*/
import { DynamicComponent } from './dynamic/dynamic.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    /*-----------*/
    DynamicComponent,
    UserComponent,
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*---------*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
