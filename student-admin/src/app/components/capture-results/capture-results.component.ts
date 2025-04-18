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
  
  name ='';
  surname = '';
  studentNo = '';
  degree = '';
  modules = '';


  constructor(private dataService :DataService){

  }
  onSumbit(){

    
    this.dataService.captureResults(this.enteredStudentNumber);

    
    
    
  }

  
  

  

  

   get results(){
    
   return this.dataService.match
    }

    save(){
      let data = this.modules.split(",");

      this.dataService.saveResults({
        name:this.name,
        surname: this.surname,
        studentNo: this.studentNo,
        modules:data

      });
    

    
    
   
    
  } 
    

      
      
    

    
      

    
    

  }




