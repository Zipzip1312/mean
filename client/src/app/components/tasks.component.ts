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

  updateStatus(task: Task) {
    const _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

    this.tasksService.updateTask(_task).subscribe(data => {
      task.isDone = !task.isDone;
    });
  }

  deleteTask(id): void {
    const tasks = this.tasks;
    this.tasksService.deleteTask(id).subscribe(data => {
      if (data.n === 1) { //  it's a kinda status ok of deleted obj, response of method delete {n: 1, ...}
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i]._id === id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }

}
