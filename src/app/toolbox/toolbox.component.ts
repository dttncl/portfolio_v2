import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-toolbox',
    standalone: true,
    templateUrl: './toolbox.component.html',
    styleUrl: './toolbox.component.sass',
    imports: [FooterComponent, NavigationComponent]
})
export class ToolboxComponent {

}
