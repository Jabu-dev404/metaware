import { Component } from '@angular/core'
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
import { ViewStudentsComponent } from './view-student/view-students.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CaptureDegreeComponent, HeaderComponent, OptionComponent,CaptureStudentComponent,ViewStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
