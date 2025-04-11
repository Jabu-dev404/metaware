import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { Degree } from '../models/degree.model';
import { DataService, } from '../data.service';
@Component({
  selector: 'app-capture-degree',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capture-degree.component.html',
  styleUrl: './capture-degree.component.css'
})
export class CaptureDegreeComponent {



  enteredName = '';
  enteredYears = '';
  enteredModules = "";
  enteredFaculty = '';
  enteredCost = '';
  constructor(private dataService: DataService) { }

  onSubmit() {
    let data = this.enteredModules.split(",");

    this.dataService.captureDegree({
      name: this.enteredName,
      noOfYears: +this.enteredYears,
      modules: data,
      falcalty: this.enteredFaculty,
      cost: +this.enteredCost
    });
  };




}
