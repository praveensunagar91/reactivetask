import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserdisplayComponent } from './userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { userrouting } from './user.routing';

@NgModule({

   declarations:[

    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
   ],

   imports:[

    CommonModule,
    FormsModule,
    userrouting
   ],

})

export class Usermodule {}
