import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.component')
  },
  {
    path: 'pages',
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    loadChildren: () => import('./page/pages-routing.module')
      .then((m) => m.PagesRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.routes')
    .then((m) => m.RegisterRoutes)
  },
  { path: '**', redirectTo: '' }
];

