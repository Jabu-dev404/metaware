import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";
import { Student} from "./models/student.model";

@Injectable({ providedIn: 'root' })
export class DataService {
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

    get viewStudents(){
        return this.students 
    }

    captureResults(studentNumber: number){
        console.log(studentNumber);

    }

}

