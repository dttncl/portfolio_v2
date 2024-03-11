import { ViewportScroller } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})

export class NavigationComponent {

  constructor (private elRef:ElementRef, private viewportScroller: ViewportScroller) {}

  scrollToHome() {
    this.viewportScroller.scrollToAnchor('home-component');
  }

  scrollToProjects() {
    this.viewportScroller.scrollToAnchor('project-component');
  }

  scrollToToolbox() {
    this.viewportScroller.scrollToAnchor('toolbox-component');
  }

  // bg, text
  barbieTheme : string[] = ['#FFE7F8','#FF006E']
  kenTheme : string[] = ['#CDEFFF','#3A8EE4']

  isKen : boolean = false;

  switchTheme() {
    //const links: HTMLCollectionOf<HTMLAnchorElement> = this.elRef.nativeElement.getElementsByTagName('a')
    
    if (this.isKen === false) {

      // switch to Ken Mode
      console.log("Hellooooo Ken")
      this.isKen = true

      // toggle link colors
      /*
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('barbie');
        links[i].classList.add('ken');
      }
      */

      // toggle bg color
      document.getElementsByTagName('body')[0].style.backgroundColor = this.kenTheme[0]

    } else {
      // switch to Barbie Mode
      console.log("Hellooooo Barbie")
      this.isKen = false
      /*
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('ken');
        links[i].classList.add('barbie');
      }
      */
      document.getElementsByTagName('body')[0].style.backgroundColor = this.barbieTheme[0]
    }
  }

}


