import { Routes } from '@angular/router';
import { CaptureDegreeComponent } from './capture-degree/capture-degree.component';
import { Component } from '@angular/core';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';

export const routes: Routes = [
    {
        path:'degree',
        component:CaptureDegreeComponent,
    },
    {
        path:'viewResults',
        component:ViewResultsComponent,
    },
    {
    path:'capturestudent',
    component:CaptureStudentComponent,
    },
        
        
    
   
];
