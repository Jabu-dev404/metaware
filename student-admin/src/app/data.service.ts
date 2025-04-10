import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";

@Injectable({providedIn :'root'})
export class DataService{
    degrees ? : Degree[];  
    option = [{
        id : "o1",
        name : 'Register'

    }]
    captureDegree(degree :Degree){
        this.degrees = [];
        for(let i =0 ; i< degree.modules.length; i++){
            console.log(degree.modules[i]);
          }
          
        this.degrees?.push(degree)
        console.log(this.degrees?.length)
    }
}