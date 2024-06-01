import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

const AngularModules = [
  FormsModule,
  ReactiveFormsModule,
];

export const LoginModules = [
  ...MaterialModules,
  ...AngularModules
]
