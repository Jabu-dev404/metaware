import { inject, Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";
import { Student } from "./models/student.model";
import { ViewResults} from "./models/student.model";
import { Router} from "@angular/router";

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
    private router = inject(Router);
    option = [
        {
            optionId: "01",
            name: 'Capture student'
            },
            {
                optionId: "02",
                name: 'view students'
                },

                {
                    optionId: "03",
                    name: 'capture results'
                    },

                    {
                        optionId: "04",
                        name: 'view results'
                        },
                        {
                            optionId: "05",
                            name: 'capture degree'
                            },
                            {
                                optionId: "06",
                                name: 'view degree'
                                },
]


    degree = {
        name :'',
        noOfYears : 0,
        modules :[''],
        falcalty :'',
        cost : 0,
        edit : false
    }
    captureDegree(degree: Degree) {
         degree.edit=false
        this.degrees.push(degree)
         
    }

    get viewDegree() {
        return this.degrees
    }


    
    // get viewStudents() {
    //     return this.students;
    // }
    get match() {
        return this.match2
 
    // captureResults(studentNumber: string){   
    //     this.match2 = this.students.find((student) => student.studentNo === studentNumber)!
    //     console.log(this.match2.name)
     }

     get viewStudents() { 
        return this.students;
     }
    // editStudent(student:Student){
        
    //  }

    updateStudent(student:Student){
        this.students.push(student)
       
      }



    //  get match(){
    //     return this.match2
    //  }
     

    // captureStudents(student:Student) {
    //     this.students.push(student);
    //     console.log(this.students[0].name)
    // }

    edit(name : string){
        console.log(name + "im service");
        this.degrees.find((d)=> d.name === name)!.edit = true;
        this.router.navigate(['06', this.degrees.find((d)=> d.name === name)!.name,'degreeDetails'])

    //    console.log(this.degrees.findIndex((d)=> d.name === name)!  + " found")
    }
    editDegre(degree:Degree,degreeNewName : Degree){
        this.degrees.find((d)=> d.name === degree.name)!.edit = false
        this.degrees.find((d)=> d.name === degree.name)!.name =degreeNewName.name
        this.degrees.find((d)=> d.name === degree.name)!.noOfYears = degreeNewName.noOfYears
        this.degrees.find((d)=> d.name === degree.name)!.falcalty = degreeNewName.falcalty
        this.degrees.find((d)=> d.name === degree.name)!.modules = degreeNewName.modules
        this.degrees.find((d)=> d.name === degree.name)!.cost = degreeNewName.cost
        this.router.navigate(['06', degreeNewName.name,'degreeDetails'])


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


