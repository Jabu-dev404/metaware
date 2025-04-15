import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-edit-students',
  imports: [FormsModule],
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.css'
})
export class EditStudentsComponent implements OnInit {
  enteredName = '';
  enteredSurname ='';
  enteredNo ='';
  enteredRegistraction = '';
  // enteredDegree = '';
  // enteredYear = '';
  

  constructor(private dataService :DataService){
    
   
  }
  
  ngOnInit(): void {
   
   
  }

  
  saveStudent(){
  console.log(this.dataService.updateStudent.name)


    // this.dataService.updateStudent({
    //   name : this.enteredName,
    //   surname: this.enteredSurname,
    //   studentNo :this.enteredNo,
    //   registration:{year,degree,awarded,modulepassed,cost}

    // });
     
  
  

  }

}
