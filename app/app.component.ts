// ROOT COMPONENT
import { Component } from '@angular/core';

// Every component has an ANNOTATION and a CLASS DEFINITION

// ANNOTATION / TEMPLATE
@Component({
  selector: 'app-root',
  template: `
   <div class="container">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <ul>
        <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
      </ul>
  </div>
  `
})

// CLASS DEFINITION
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish x, y, and z"),
    new Task("Start on a, b, and c"),
    new Task("Read up on i, j, k")
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}
