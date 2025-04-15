import { Component } from '@angular/core'
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
import { ViewStudentsComponent } from './view-student/view-students.component';
import { EditDegreeComponent } from './edit-degree/edit-degree.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
<<<<<<< HEAD
  imports: [ HeaderComponent, OptionComponent,RouterOutlet],
=======
  imports: [RouterOutlet,CaptureDegreeComponent, HeaderComponent, OptionComponent,CaptureStudentComponent,ViewStudentsComponent,EditStudentsComponent],
>>>>>>> e4bc6659b7a50cd73a75a00a313b6c0606bd7c64
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
