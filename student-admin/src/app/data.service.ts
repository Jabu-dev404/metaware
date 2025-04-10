import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";

@Injectable({providedIn :'root'})
export class DataService{
  private  degrees = [
    { 
        name :" ",
        noOfYears : 0,
        modules :[''],
        falcalty :'',
        cost : 0
    }
  ]  
    option = [{
        id : "o1",
        name : 'Register'

    }]
    captureDegree(degree :Degree){
        
        for(let i =0 ; i< degree.modules.length; i++){
            console.log(degree.modules[i]);
          }
          
        this.degrees.push(degree)
        console.log(this.degrees.length)

        this.option.push({
            id : "o2",
            name :"check results"
        })
    }

    get viewDegree(){
        return this.degrees
    }
}