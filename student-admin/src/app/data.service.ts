import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";
import { Student } from "./models/student.model";
import { ViewResults} from "./models/student.model";

@Injectable({ providedIn: 'root' })
export class DataService {
    match1 = {
        name: '',
        noOfYears: 0,
        modules: [''],
        falcalty: '',
        cost: 0
    };

    viewresults ={
    name: '',
    surname: '',
    studentNo: '',
    modules: [''],

    }


    match2 = {
        studentNo: '',
        name: '',
        surname: '',
        registration: {
            year: '',
            degree: {
                name: '',
                noOfYears: 0,
                modules: [''],
                falcalty: '',
                cost: 0
            },

            awarded: false,
            modulepassed: [''],
            cost: 0,
        }
    };

    private degrees: Degree[] = []
    private results: ViewResults[] =[]
    private students: Student[] = []

    option = [{
        id: "o1",
        name: 'Register'

    }]
    captureDegree(degree: Degree) {
        this.degrees.push(degree)
    }

    get viewDegree() {
        return this.degrees
    }


    
    get viewStudents() {
        return this.students;
    }
    get match() {
        return this.match2
    }





    captureStudents(student: Student) {

        this.students.push(student);
        


    }
    captureResults(studentNumber: string) {
        // console.log(this.students[+studentNumber])
        this.match2 = this.students[+studentNumber]
    
    }

saveResults(view:ViewResults){
     this.results.push(view);
       
}
searchResults(studentNumber:string){
    this.viewresults =this.results[+studentNumber]
}

get viewresult(){
    return this.viewresults
}


    



}

