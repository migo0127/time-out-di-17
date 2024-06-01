import { Routes } from "@angular/router";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import RegisterComponent from "./register.component";

export const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: '', redirectTo: 'step-1', pathMatch: 'full' },
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component }
    ]
  },
  { path: '**', redirectTo: '' }
];
