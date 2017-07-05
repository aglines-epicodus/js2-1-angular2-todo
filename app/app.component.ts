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
}
