import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  openCV() {
    open('/assets/Bernadette-Fernando-Resume.pdf');
  }
}
