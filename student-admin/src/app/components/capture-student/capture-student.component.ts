import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-capture-student',
  imports:[FormsModule],
  templateUrl: './capture-student.component.html',
  styleUrl: './capture-student.component.css'
})
export class CaptureStudentComponent {
 
  private dataService = inject(DataService);
  
  // get degrees() {
  //   return this.dataService.
  // }
 
   
   
  
  // degrees = this.dataServices.viewDegree

  get degrees() {
    return this.dataService.viewDegree
  }
 
}
