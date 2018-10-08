import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
