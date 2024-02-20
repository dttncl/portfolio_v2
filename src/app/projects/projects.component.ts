import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from "../footer/footer.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.sass',
    imports: [FooterComponent, NavigationComponent, CommonModule]
})
export class ProjectsComponent {

    projects: Project[] = [];

    // when projects component is instantiated, inject service instance
    constructor(private projectService: ProjectService) {}

    // method to get all the projects
    getProjects(): void {

    // handle an observable
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
    }

    // execute the function after constructing AppComponent instance
    ngOnInit(): void {
        this.getProjects();
    }
    
}
