import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  url:string= "https://nodejsapidemo.herokuapp.com/tasks/";

  constructor(private _http: HttpClient, private _router: Router) { }

  getAllTask(){
    return this._http.get(this.url);
  }
  getTaskById(Id) {
    return this._http.get(this.url + Id);
  }

  addTask(newtask) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newtask);
    return this._http.post(this.url, body, { headers: head });
  }

  deleteTask(Id) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + Id, { headers: head });
  }
  editTask(newtask) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newtask);
    return this._http.put(this.url + newtask.Id, body, { headers: head });
  }
}
