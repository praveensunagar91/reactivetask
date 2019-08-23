import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
   id:string;
  constructor(private act:ActivatedRoute) { }

  ngOnInit() {

    this.act.queryParams.subscribe(
      (x)=>{
        this.id=x.id;
      }
    );
  }

}
