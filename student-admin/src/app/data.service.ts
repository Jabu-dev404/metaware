import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";

@Injectable({providedIn :'root'})
export class DataService{
    degrees ? : Degree[];  
    captureDegree(degree :Degree){
        this.degrees?.push(degree)
    }
}