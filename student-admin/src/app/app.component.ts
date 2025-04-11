import { Component } from '@angular/core'
import { CaptureDegreeComponent } from "./capture-degree/capture-degree.component";
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
<<<<<<< HEAD
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
=======
import { ViewDegreeComponent } from './view-degree/view-degree.component';
>>>>>>> 166545dd32862a10b81a5b95fab2fac079f8705c

@Component({
  selector: 'app-root',
  standalone:true,
<<<<<<< HEAD
  imports: [CaptureDegreeComponent, HeaderComponent, OptionComponent,CaptureStudentComponent],
=======
  imports: [CaptureDegreeComponent, HeaderComponent, OptionComponent,ViewDegreeComponent],
>>>>>>> 166545dd32862a10b81a5b95fab2fac079f8705c
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
