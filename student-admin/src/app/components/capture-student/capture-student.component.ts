import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
import { Student } from '../../models/student.model';
import { Degree } from '../../models/degree.model';

@Component({
  selector: 'app-capture-student',
  standalone : true,
  imports:[FormsModule],
  templateUrl: './capture-student.component.html',
  styleUrl: './capture-student.component.css'
})
export class CaptureStudentComponent {
  private dataService = inject(DataService);
  private awarded = false;
<<<<<<< HEAD
  private studentNo = this.dataService.viewStudents.length + " ";
=======
  private studentNo = ++this.dataService.viewStudents.length + " ";
  selectedDegree!:Degree;
>>>>>>> 3ba9fde8d973193c927c3534c24dea7d0d0b68b5

  enteredName = ' ';
  enteredSurname = ' ';
  enteredYears = ' ';
  enteredDegree = ' ';
  
  
  get degrees() {
    return this.dataService.viewDegree
  }
 
  get choosenDegree() {
    return this.selectedDegree = this.dataService.viewDegree.find((degree) => degree.name === this.enteredDegree)!;
  }
  
  onSubmit() {
    const degree = this.dataService.viewDegree.find((d) =>d.name === this.enteredDegree)!;
      this.dataService.captureStudents({
        studentNo:this.studentNo,
        name:this.enteredName,
        surname:this.enteredSurname,registration:{
          year:this.enteredYears,
          degree:degree,
          awarded:this.awarded,
          modulepassed:degree.modules,
          cost:degree.cost
        }
      })
    
  }
 
}
