import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-students',
  standalone:true,
  imports: [],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent {
  // students =["Thabo","Tehilla","peggy","Jabu"]
  constructor(private dataService:DataService){
    
  }
  
  get students(){
   
    return this.dataService.viewStudents
  }

}
