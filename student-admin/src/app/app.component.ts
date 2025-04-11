import { Component } from '@angular/core'
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { ViewDegreeComponent } from './view-degree/view-degree.component';
import { RouterOutlet } from '@angular/router';
import { CaptureResultsComponent } from "./components/capture-results/capture-results.component";
import { CaptureStudentComponent } from "./components/capture-student/capture-student.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, OptionComponent, CaptureDegreeComponent, CaptureResultsComponent, CaptureStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
