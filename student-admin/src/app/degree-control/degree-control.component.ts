import { Component, Input,DoCheck, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-degree-control',
  imports: [],
  templateUrl: './degree-control.component.html',
  styleUrl: './degree-control.component.css'
})
export class DegreeControlComponent implements DoCheck {

 @Input({required : true}) degreeName! : string;
 dataService = inject(DataService)
 ngDoCheck(): void {
  console.log("im here")
  console.log(this.degreeName);
  this.dataService.edit(this.degreeName);
}
 
}
