import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-option',
  standalone:true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
private dataService = inject(DataService);

 options = this.dataService.option
}

