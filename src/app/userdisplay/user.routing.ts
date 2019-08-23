import { Router,RouterModule, Routes } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { UserdisplayComponent } from './userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';



const arr: Routes =[

  {path:'users',component:UserdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent}

];

export const userrouting=RouterModule.forChild(arr);
