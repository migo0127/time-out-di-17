import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,

];

const AngularModules = [
  FormsModule,
  ReactiveFormsModule,
  NgClass,
];

export const RegisterModules = [
  ...MaterialModules,
  ...AngularModules
]
