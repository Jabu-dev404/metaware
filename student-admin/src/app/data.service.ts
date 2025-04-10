import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";

@Injectable({providedIn :'root'})
export class DataService{
    degrees ? : Degree[];  
    option = [{
        id : 0,
        name : ''

    }]
    captureDegree(degree :Degree){
        for(let i =0 ; i< degree.modules.length; i++){
            console.log(degree.modules[i]);
          }
          
        this.degrees?.push(degree)
    }
}