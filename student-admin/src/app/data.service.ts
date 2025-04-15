import { inject, Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";
import { Student} from "./models/student.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class DataService {
    router = inject(Router)
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

    degree = {
        name :'',
        noOfYears : 0,
        modules :[''],
        falcalty :'',
        cost : 0,
        edit : false
    }
    captureDegree(degree: Degree) {
        degree.edit = false
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
    // editStudent(student:Student){
        
    //  }

    updateStudent(student:Student){
        this.students.push(student)
       
      }



     get match(){
        return this.match2
     }
     

    captureStudents(student:Student) {
        this.students.push(student);
<<<<<<< HEAD
        console.log(this.students[0].name)
    }

    edit(name : string){
        console.log(name + "im service");
        this.degrees.find((d)=> d.name === name)!.edit = true;
        this.router.navigate(['viewDegree', this.degrees.find((d)=> d.name === name)!.name,'degreeDetails'])

    //    console.log(this.degrees.findIndex((d)=> d.name === name)!  + " found")
    }
    editDegre(degree:Degree,degreeNewName : Degree){
        this.degrees.find((d)=> d.name === degree.name)!.edit = false
        this.degrees.find((d)=> d.name === degree.name)!.name =degreeNewName.name
        this.degrees.find((d)=> d.name === degree.name)!.noOfYears = degreeNewName.noOfYears
        this.degrees.find((d)=> d.name === degree.name)!.falcalty = degreeNewName.falcalty
        this.degrees.find((d)=> d.name === degree.name)!.modules = degreeNewName.modules
        this.degrees.find((d)=> d.name === degree.name)!.cost = degreeNewName.cost
        this.router.navigate(['viewDegree', degreeNewName.name,'degreeDetails'])


=======
      
>>>>>>> e4bc6659b7a50cd73a75a00a313b6c0606bd7c64
    }

    

}


