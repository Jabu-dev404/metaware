import { Student } from "./student.model";
import { Degree } from "./degree.model";

export interface Registration {
    year : string
    degree :Degree
    awarded :boolean
   modulepassed:string[]
   cost :number


}