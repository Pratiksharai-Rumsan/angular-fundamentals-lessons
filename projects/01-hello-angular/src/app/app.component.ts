import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Your Angular application is running successfully.</li>
      <li>You have set up a standalone component as the root component.</li>
      <li>You are using the Angular Router for navigation.</li>
      <li>Feel free to explore and build your Angular application further!</li>
    </ol>
  `,
  styles: `
  ol{
  list-style-type:upper-roman;
  
  }
  
  `,
})
export class AppComponent {}
