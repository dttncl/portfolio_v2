import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
    {
        path: '',
        component: WelcomeComponent
      },
    {
        path: '**',
        pathMatch: 'full',
        component: PagenotfoundComponent
      },
];
