import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { CaptureResultsComponent } from "./components/capture-results/capture-results.component";
import { CaptureStudentComponent } from "./components/capture-student/capture-student.component";
import { ViewResultsComponent } from './components/view-results/view-results.component';


=======
 
>>>>>>> e79eaf87f8ab3403de83a346be3c1eedf7a04c8c

@Component({
  selector: 'app-root',
  standalone:true,
<<<<<<< HEAD
  imports: [RouterOutlet,ViewResultsComponent, HeaderComponent, OptionComponent, CaptureDegreeComponent, CaptureResultsComponent, CaptureStudentComponent, ViewResultsComponent],
=======
  imports: [HeaderComponent, OptionComponent, RouterOutlet],
>>>>>>> e79eaf87f8ab3403de83a346be3c1eedf7a04c8c
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   
}
