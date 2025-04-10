import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";

@Component({
  selector: 'app-root',
  imports: [ CaptureDegreeComponent],
=======
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
>>>>>>> 523eef4dbe8f8d52bffd3a156562641dfb6ad7b2
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
