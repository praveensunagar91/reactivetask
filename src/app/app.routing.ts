import { Routes,RouterModule, PreloadAllModules } from "@angular/router";

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Product1Component } from './product1/product1.component';
import { productResolved } from './productdisplay/product';
import { ProductResolverService } from './product-resolver.service';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { TaskResolverService } from './task-resolver.service';

const arr : Routes=[


  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'',data:{preload:true},component:CustomerComponent},
  {path:'signupreactive',component:SignupReactiveDemoComponent},
   {path:'task',resolve:{Tdata:TaskResolverService},component:TaskdisplayComponent},
   {path:'addtask',component:AddtaskComponent},
   {path:'edittask/:Id',component:EdittaskComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo2',component:Demo2Component},
  {path:'demo1/:id',component:Demo1Component},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#Productmodule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'edituserreactive/:user_email',component:EdituserreactiveComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/pagenotfound'}

];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
