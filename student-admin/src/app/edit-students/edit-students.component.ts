import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-students',
  imports: [FormsModule],
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.css'
})
export class EditStudentsComponent {
  enteredName = '';
  enteredSurname ='';
  enteredDegree = '';
  enteredYear = ''; 

  constructor(private dataService :DataService){
    // this.dataService.updateStudent
  }


  saveStudent(){
    console.log('clicked');
    
    
  }

}
