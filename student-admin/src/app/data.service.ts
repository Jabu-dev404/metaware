import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";
import { Student} from "./models/student.model";

@Injectable({ providedIn: 'root' })
export class DataService {
    match1 ={
        name :'',
    noOfYears : 0,
    modules :[''],
    falcalty :'',
    cost :0
    };
    private degrees: Degree[] = []
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

 
    captureResults(studentNumber: string){   
        this.match1 = this.degrees.find((degree) => degree.name === studentNumber)!
        console.log(this.match1.name)
     }
     get viewStudents() {
        return this.students;
     }
     

    

    editStudents(){
    }

    

    captureStudents(student:Student) {
         
        console.log(this.students.length)
    }

}


