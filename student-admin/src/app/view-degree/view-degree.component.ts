<<<<<<< HEAD
import { Component, signal } from '@angular/core';
=======
 import { Component } from '@angular/core';
>>>>>>> 20fe919b1ce7c08ebd390c3762861797894d6368
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
