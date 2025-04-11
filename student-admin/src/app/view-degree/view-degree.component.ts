import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-view-degree',
  imports: [],
  templateUrl: './view-degree.component.html',
  styleUrl: './view-degree.component.css'
})
export class ViewDegreeComponent {
  constructor(private dataService :DataService){}

  get degrees(){
    return this.dataService.viewDegree
  }
}
