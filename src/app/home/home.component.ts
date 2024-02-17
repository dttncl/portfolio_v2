import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ToolboxComponent } from '../toolbox/toolbox.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NavigationComponent,
    ProjectsComponent,
    ToolboxComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  openCV() {
    open('/assets/Bernadette-Fernando-Resume.pdf');
  }
}
