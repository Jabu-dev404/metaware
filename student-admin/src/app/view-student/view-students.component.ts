import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-students',
  imports: [],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent {
  constructor(private dataService:DataService){

  }

  get students(){
    return this.dataService.viewStudents
  }

}
