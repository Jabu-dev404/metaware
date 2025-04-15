import { Component, Input, DoCheck, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controller',
  imports: [],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.css'
})
export class ControllerComponent implements OnInit{
  @Input({required:true}) optionId!:string
  route = inject(Router);
  ngOnInit(): void {
    this.route.navigate([this.optionId])
  }
   
 
}