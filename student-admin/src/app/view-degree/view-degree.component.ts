import { Component, signal } from '@angular/core';
import { DataService } from '../data.service';
import { inject } from '@angular/core/testing';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-degree',
  standalone : true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './view-degree.component.html',
  styleUrl: './view-degree.component.css'
})
export class ViewDegreeComponent {
  
  constructor(private dataService :DataService){}

  get degrees(){
    return this.dataService.viewDegree
  }
}
