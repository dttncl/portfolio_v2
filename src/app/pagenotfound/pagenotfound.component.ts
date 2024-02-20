import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-pagenotfound',
    standalone: true,
    templateUrl: './pagenotfound.component.html',
    styleUrl: './pagenotfound.component.sass',
    imports: [FooterComponent]
})
export class PagenotfoundComponent {

}
