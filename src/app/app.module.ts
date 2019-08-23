import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';


import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';
import { Usermodule } from './userdisplay/user.module';
import { AppCustomPreloader } from './appcustomerpreload';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';


@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    PagenotfoundComponent,





    CustomerComponent,

    SignupReactiveDemoComponent,

    EdituserreactiveComponent,

    LoginComponent,

    DemoComponent,

    Demo1Component,

    Demo2Component,

    Product1Component,

    TaskdisplayComponent,

    AddtaskComponent,

    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Usermodule

  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},
  AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
