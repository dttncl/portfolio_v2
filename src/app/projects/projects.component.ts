import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.sass',
    imports: [FooterComponent, NavigationComponent]
})
export class ProjectsComponent {

}
