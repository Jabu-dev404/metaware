import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
 import { Degree } from '../models/degree.model';
import { DataService,  } from '../data.service';
@Component({
  selector: 'app-capture-degree',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capture-degree.component.html',
  styleUrl: './capture-degree.component.css'
})
export class CaptureDegreeComponent {
  


  enteredName ='';
  enteredYears ='';
  enteredModules = "";
  enteredFaculty ='';
  enteredCost = '';

   data = this.enteredModules.split(",");
  
 

  
  

  

   constructor(private dataService:DataService){
    
   }

  onSubmit(){
     
   this.dataService.captureDegree({
    name :this.enteredName,
    noOfYears : +this.enteredYears,
    modules :  this.enteredModules.split(","),
    falcalty : this.enteredFaculty,
    cost : +this.enteredCost,

    

   }
  
    
  );
  for(let i =0 ; i< this.data.length; i++){
    console.log(this.data[i]);
  }
  
    };
    
  


}
