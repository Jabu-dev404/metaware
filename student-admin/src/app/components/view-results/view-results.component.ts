import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-view-results',
  imports: [FormsModule,],
  templateUrl: './view-results.component.html',
  styleUrl: './view-results.component.css'
})
export class ViewResultsComponent {
  enteredStudentNumber = ' ';
 div='';


constructor(private dataservice:DataService ){

}
onSubmit(){
this.dataservice.searchResults(this.enteredStudentNumber)

}

get viewResults(){
  
 return  this.dataservice.viewresult
  
 
}

onCancel(){
this.viewResults.name= '';
this.viewResults.surname = '';
this.viewResults.studentNo ='';
this.viewResults.modules = [];
  
}
}