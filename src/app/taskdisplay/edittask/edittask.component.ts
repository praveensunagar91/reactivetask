import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { TaskdataService } from "../taskdata.service";
import { task } from "../task";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edittask",
  templateUrl: "./edittask.component.html",
  styleUrls: ["./edittask.component.css"]
})
export class EdittaskComponent implements OnInit {
  task: FormGroup;
  id: string;
  taskdata: task;
  constructor(
    private fb: FormBuilder,
    private _data: TaskdataService,
    private act: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.id = this.act.snapshot.params['Id'];
    console.log(this.id);
    this._data.getTaskById(this.id).subscribe((data: task[]) => {
      this.taskdata = data[0];
      this.task.patchValue({
        Id:this.taskdata.Id,
        Title:this.taskdata.Title,
        Status:this.taskdata.Status
      });
    });

    this.task = this.fb.group({
      Id: new FormControl(),
      Title: new FormControl(),
      Status: new FormControl()
    });
  }

  onTaskUpdate(){

    this._data.editTask(new task(this.task.value.Id,this.task.value.Title,this.task.value.Status)).subscribe(

      (data:any)=>{

        alert("record updated");

        this.router.navigate(['/task']);
      }
    );
  }

}
