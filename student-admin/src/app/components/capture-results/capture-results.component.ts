import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-capture-results',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './capture-results.component.html',
  styleUrl: './capture-results.component.css'
})
export class CaptureResultsComponent {
  
  
  enteredStudentNumber = '';
  



  constructor(private dataService :DataService){

  }
  onSumbit(){

    this.dataService.captureResults(this.enteredStudentNumber);
    
    }

   get results(){
   return this.dataService.match1
<<<<<<< HEAD
=======
    }

    save(){
      
>>>>>>> 3ba9fde8d973193c927c3534c24dea7d0d0b68b5
    }

  }




