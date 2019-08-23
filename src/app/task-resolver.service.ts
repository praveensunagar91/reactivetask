import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TaskdataService } from './taskdisplay/taskdata.service';



@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve <TaskResolverService>  {

  constructor(private taskdata:TaskdataService)  { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.taskdata.getAllTask().pipe(

       map( (x) => ({Tasks: x, errormsg: ''})),

       catchError(error=>{
         return of({Tasks:null,errormsg:'Something went wrong'})
       })
     );



   }
}
