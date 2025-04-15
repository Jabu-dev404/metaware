import { Routes } from '@angular/router';
import { CaptureDegreeComponent } from './capture-degree/capture-degree.component';
import { Component } from '@angular/core';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
import { CaptureResultsComponent } from './components/capture-results/capture-results.component';
import { ViewDegreeComponent } from './view-degree/view-degree.component';
import { EditDegreeComponent } from './edit-degree/edit-degree.component';
import { ControllerComponent } from './components/controller/controller.component';
import { ViewStudentsComponent } from './view-student/view-students.component';

export const routes: Routes = [
    {
    path:'01',
    component:CaptureStudentComponent,
    
    },
    {
        path:'02',
        component:ViewStudentsComponent,
    },
    {
        path:'04',
        component:ViewResultsComponent,
    },
    {
        path:'05',
        component:CaptureDegreeComponent,
    },
    {
        path:'03',
        component:CaptureResultsComponent,
    },

    {
        path:'',
        component:ViewDegreeComponent
    },
    {
        path : 'editDegree',
        component : EditDegreeComponent
    },

    
        {
            path:':optionId/controller',
            component:ControllerComponent,
        },


    
        
        
    
   
];
