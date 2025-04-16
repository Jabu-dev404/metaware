import { Component, inject, Input, signal, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Degree } from '../models/degree.model';

@Component({
  selector: 'app-degree-details',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './degree-details.component.html',
  styleUrl: './degree-details.component.css'
})
export class DegreeDetailsComponent {

  @Input() degreeName!: string;

  private dataServise = inject(DataService);
  name = ''
  noOfYears = '';
  module = ''
  falcalty = '';
  cost = 0

  



  // ngDoCheck(): void {
  //   if(this.name){
  //   this.name = this.dataServise.viewDegree.find((d) => d.name === this.degreeName)!.name
  //   }
  // }


  get degree() {

    return this.dataServise.viewDegree.find((d) => d.name === this.degreeName)!

  }


  onSubmit() {
    let data = this.module.split(",");
    // this.name = this.dataServise.viewDegree.find((d) => d.name === this.degreeName)!.name
    this.dataServise.editDegre(this.degree, {
      name: this.name,
      noOfYears: +this.noOfYears,
      modules: data,
      falcalty: this.falcalty,
      cost: this.cost,
      edit: false
    })

  }


}
