import { Component, inject, input} from '@angular/core';
import { DataService } from '../../data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-option',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
private dataService = inject(DataService);
 options = this.dataService.option
}

