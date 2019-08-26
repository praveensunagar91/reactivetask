import { Routes,RouterModule } from '@angular/router';
import { TaskResolverService } from '../task-resolver.service';
import { TaskdisplayComponent } from './taskdisplay.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';

const arr: Routes=[

  {path:'',children:[

  {path:'',resolve:{Tdata:TaskResolverService},component:TaskdisplayComponent},
   {path:'addtask',component:AddtaskComponent},
   {path:'edittask/:Id',component:EdittaskComponent},
  ],
}


];

export const taskrouting=RouterModule.forChild(arr);
