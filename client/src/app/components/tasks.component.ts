import { Task } from './task.model';
import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;

  constructor( private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe( res => this.tasks = res );
  }

  addTask(event) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };

    this.tasksService.addTask(newTask)
        .subscribe(task => {
          this.tasks.push(<Task>task);
          this.title = '';
        });
  }

}
