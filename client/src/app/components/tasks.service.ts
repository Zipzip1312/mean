import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): any {
    return this.http.get('http://localhost:3000/api/tasks');
  }

  addTask(newTask: Task): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), { headers: headers });
  }

  updateTask(task: Task): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put('http://localhost:3000/api/task/' + task._id, JSON.stringify(task), { headers: headers });
  }

  deleteTask(id): any {
    return this.http.delete('http://localhost:3000/api/task/' + id);
  }
}
