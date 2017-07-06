// ROOT COMPONENT
import { Component } from '@angular/core';

// Every component has an ANNOTATION and a CLASS DEFINITION

// TEMPLATE / FRONT END
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}   <button (click)="editTask(currentTask)">Edit!</button></li>
    </ul>
  </div>
    <h3>{{selectedTask.description}}</h3>
    <p>Task Complete? {{selectedTask.done}}</p>
    <h3>Edit Task</h3>
    <label>Enter Task description:</label>
    <input [(ngModel)]="selectedTask.description">
    <label>Enter Task priority</label>
    <br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (low)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (high)<br>
  `
})

// CLASS DEFINITION / BACKEND
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish x, y, and z", 1),
    new Task("Start on a, b, and c", 3),
    new Task("Read up on i, j, k", 3)
  ];
  selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
      this.selectedTask = clickedTask;
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      console.log("this task is done");
    } else {
      console.log("this task is not done");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {}
}
