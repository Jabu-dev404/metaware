import { Routes } from '@angular/router';
import { CaptureDegreeComponent } from './capture-degree/capture-degree.component';
import { Component } from '@angular/core';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { CaptureStudentComponent } from './components/capture-student/capture-student.component';
import { CaptureResultsComponent } from './components/capture-results/capture-results.component';
import { ViewDegreeComponent } from './view-degree/view-degree.component';
import { EditDegreeComponent } from './edit-degree/edit-degree.component';
<<<<<<< HEAD
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

=======
import { DegreeControlComponent } from './degree-control/degree-control.component';
import { DegreeDetailsComponent } from './degree-details/degree-details.component';

export const routes: Routes = [
    {
        path: 'degree',
        component: CaptureDegreeComponent,
    },
    {
        path: 'viewResults',
        component: ViewResultsComponent,
    },
    {
        path: 'capturestudent',
        component: CaptureStudentComponent,
    },
    {
        path: 'captureresults',
        component: CaptureResultsComponent,
    },

    {
        path: 'viewDegree',
        component: ViewDegreeComponent,
        children: [

           
            {
                path : ':degreeName/degreeDetails',
                component : DegreeDetailsComponent,
                children : [
                    {
                        path: 'editDegree',
                        component: DegreeControlComponent
                    },
                ]
            }


        ]
    }
>>>>>>> 577e12fbef2163432f2fd92011ac666da3535022






];
