import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
<<<<<<< HEAD
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
import { ViewStudentsComponent } from './view-student/view-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
=======
>>>>>>> 4b1feb68bfe5dc08bd3f89cc3873587862135e96
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, OptionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
