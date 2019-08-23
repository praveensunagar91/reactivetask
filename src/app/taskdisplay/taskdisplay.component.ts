import { Component, OnInit } from '@angular/core';
import { task } from './task';
import { TaskdataService } from './taskdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr:task[]=[];
  taskdata:any;
  errormsg:string;

  constructor(private act:ActivatedRoute,private _data:TaskdataService,private _router:Router) {

    this.taskdata=this.act.snapshot.data['Tdata'];
  }

  ngOnInit() {

    this.arr=this.taskdata.Tasks;
    this.errormsg=this.taskdata.errormsg;
  }


  onTaskDelete(item:task){
    this._data.deleteTask(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }

  onTaskEdit(item:task){
    // console.log(item.Id);
    this._router.navigate(['/edittask',item.Id]);
  }
  // search(value) {
  //   if (value != "") {
  //     this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
  //   } else {
  //     this._data.getAllTask().subscribe(
  //       (data: task[]) => {
  //         this.arr = data;
  //       },
  //       function(error) {
  //         alert(error);
  //       },
  //       function() {}
  //     );
  //   }
  // }

}
