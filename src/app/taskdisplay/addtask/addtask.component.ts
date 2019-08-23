import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TaskdataService } from '../taskdata.service';
import { task } from '../task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task:FormGroup;

  constructor(private fb:FormBuilder,private _data:TaskdataService) { }

  ngOnInit() {

    this.task=this.fb.group(
      {

         Id:new FormControl(null),
         Title:new FormControl(null),
         Status:new FormControl(null)
      }
    );
  }

  onTaskSave()
  {

    this._data.addTask(new task(this.task.value.Id,this.task.value.Title,this.task.value.Status)).subscribe(

      (data:any)=>{

        alert("record inserted");
      }
    );
  }

}

