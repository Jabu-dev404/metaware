import { Student } from "./student.model";
import { Degree } from "./degree.model";

export interface Registration {
    student :Student
    year : number
    degree :Degree
    awarded :boolean
   modulepassed: boolean
   cost :number


}