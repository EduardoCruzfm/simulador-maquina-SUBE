import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    {
      path: 'sube/:ramalId',
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
    {
      path: 'interest',
      loadComponent: () =>
        import('./components/points-of-interest/points-of-interest.component').then(
          (m) => m.PointsOfInterestComponent
        ),
    },
    {
      path: 'sections',
      loadComponent: () =>
        import('./components/sections/sections.component').then(
          (m) => m.SectionsComponent
        ),
    },
    {
      path: 'branch-selector',
      loadComponent: () =>
        import('./components/branch-selector/branch-selector.component').then(
          (m) => m.BranchSelectorComponent
        ),
    },
];
