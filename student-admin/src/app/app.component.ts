import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";

@Component({
  selector: 'app-root',
  imports: [ CaptureDegreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
