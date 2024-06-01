import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component')
      },
      {
        path: 'product',
        loadComponent: () => import('./product/product.component')
      },
    ]
  },
  { path: '**',  redirectTo: '' }
];
