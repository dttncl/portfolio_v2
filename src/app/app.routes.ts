import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
    {
        path: 'projects',
        loadComponent: () =>
          import('./projects/projects.component').then((m) => m.ProjectsComponent),
      },
    {
        path: '',
        loadComponent: () =>
          import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
      },
];
