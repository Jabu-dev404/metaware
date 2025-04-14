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

    
    match2 = {
        studentNo :'',
        name :'',
        surname:'',
        registration: {year : '',
        degree : { name :'',
        noOfYears : 0,
        modules : [''],
        falcalty :'',
        cost :0},

       awarded : false,
       modulepassed:[''],
       cost : 0,
    }
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
        this.match2 = this.students.find((student) => student.studentNo === studentNumber)!
        console.log(this.match2.name)
     }
     get viewStudents() {
        return this.students;
     }
     get match(){
        return this.match1
     }
     

    captureStudents(student:Student) {
         
        this.students.push(student);
    }

    

}


