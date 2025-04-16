import { Registration } from "./registration.model"

export interface Student {
    studentNo :string
    name :string
    surname:string
    registration:Registration
}


export interface ViewResults{
    name:string
    surname: string
    studentNo: string
    modules:string[]
}