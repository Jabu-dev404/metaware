import { Component } from '@angular/core'
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { ViewDegreeComponent } from './view-degree/view-degree.component';
import { RouterOutlet } from '@angular/router';
import { CaptureStudentComponent } from "./components/capture-student/capture-student.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, OptionComponent, RouterOutlet, CaptureStudentComponent, CaptureStudentComponent, CaptureDegreeComponent, ViewDegreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
