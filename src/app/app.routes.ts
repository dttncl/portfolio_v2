import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
    {
        path: 'projectss',
        component: ProjectsComponent
      },
    {
        path: 'toolboxx',
        component: ToolboxComponent
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
