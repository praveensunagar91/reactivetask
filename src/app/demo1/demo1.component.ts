import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  id:string;

  constructor(private router:Router,private act:ActivatedRoute) { }

  ngOnInit() {

    this.act.params.subscribe(

      (x)=>{
        this.id=x.id;
      }

    );
  }


  click1(){
    this.router.navigate(['demo1',1]);
  }

  click2(){
    this.router.navigate(['demo1',2]);
  }

  click3(){
    this.router.navigate(['demo1',3]);
  }
}
