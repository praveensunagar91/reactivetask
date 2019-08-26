import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskdisplayComponent } from './taskdisplay.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { taskrouting } from './task.routing';



@NgModule({

  declarations:[
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent

  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    taskrouting

  ]

})

export class TaskModule{}
