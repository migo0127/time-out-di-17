import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
];

const AngularModules = [
  FormsModule,
  ReactiveFormsModule,
];

export const ProductModules = [
  ...MaterialModules,
  ...AngularModules
]
