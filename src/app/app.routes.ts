import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'sube', pathMatch: 'full' },
    
    {
      path: 'sube',
      loadComponent: () =>
        import('./components/machine-sube/machine-sube.component').then(
          (m) => m.MachineSUBEComponent
        ),
    },
    {
      path: 'home',
      loadComponent: () =>
        import('./components/home/home.component').then(
          (m) => m.HomeComponent
        ),
    },
];
