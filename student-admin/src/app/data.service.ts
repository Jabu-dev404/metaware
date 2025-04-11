import { Injectable } from "@angular/core";
import { Degree } from "./models/degree.model";

@Injectable({ providedIn: 'root' })
export class DataService {
    private degrees: Degree[] = []
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
}