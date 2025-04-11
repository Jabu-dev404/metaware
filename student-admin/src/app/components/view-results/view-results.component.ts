import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-results',
  imports: [FormsModule],
  templateUrl: './view-results.component.html',
  styleUrl: './view-results.component.css'
})
export class ViewResultsComponent {
  enteredStudentNumber = ' ';


onSubmit(){
console.log(this.enteredStudentNumber);

}
}