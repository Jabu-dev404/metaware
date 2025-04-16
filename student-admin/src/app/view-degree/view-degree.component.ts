import { Component, signal } from '@angular/core';
import { DataService } from '../data.service';
import { inject } from '@angular/core/testing';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Degree } from '../models/degree.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-degree',
  standalone : true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './view-degree.component.html',
  styleUrl: './view-degree.component.css'
})
export class ViewDegreeComponent {
  enteredName = '';
  
  constructor(private dataService :DataService){}

  get degrees(){
    return this.dataService.viewDegree
  }
  onSubmit(degree : Degree){
  //     console.log(degree.name);
  //     console.log(this.enteredName)
  //     this.dataService.editDegre(degree,this.enteredName)
  //     this.enteredName = 'thabo'
  }
}
