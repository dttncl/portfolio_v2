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

  scrollToTop() {
    this.viewportScroller.scrollToAnchor('top');
  }

  scrollToProjects() {
    this.viewportScroller.scrollToAnchor('project-component');
  }

  scrollToToolbox() {
    this.viewportScroller.scrollToAnchor('toolbox-component');
  }

  // bg, h1, h2
  barbieTheme : string[] = ['#FFE7F8','#FF006E','#592D3D']
  kenTheme : string[] = ['#CDEFFF','#3A8EE4', '#16497d']

  isKen : boolean = false;

  switchTheme() {
    // const links: HTMLCollectionOf<HTMLAnchorElement> = this.elRef.nativeElement.getElementsByTagName('a')
    if (this.isKen === false) {

      // switch to Ken Mode
      console.log("Hellooooo Ken")
      this.isKen = true

      // toggle link colors
      let links = Array.from(document.getElementsByClassName('nav-item'))
      links.forEach(link => {
        link.classList.remove('barbie');
        link.classList.add('ken');
      });

      // toggle h2 colors
      let h2s = Array.from(document.getElementsByTagName('h2'))
      h2s.forEach(h2 => {
        h2.style.color = this.kenTheme[2]
      });

      // toggle card colors
      let cards = Array.from(document.getElementsByClassName('card'))
      cards.forEach(card => {
        card.classList.add('ken')
      });

      // toggle tag colors
      let tags = Array.from(document.getElementsByClassName('tag'))
      tags.forEach(tag => {
        let onetag = tag as HTMLElement
        onetag.style.color = this.kenTheme[1]
        onetag.style.borderColor = this.kenTheme[1]
      })
    
      // toggle bg color
      document.getElementsByTagName('main')[0].style.backgroundColor = this.kenTheme[0]
      document.getElementsByTagName('body')[0].style.backgroundColor = this.kenTheme[0]

      // toggle h1, button
      document.getElementsByTagName('h1')[0].style.color = this.kenTheme[1]
      document.getElementById('open-cv')?.classList.add('ken')

      // toggle images
      document.getElementById('icon-email')?.setAttribute("src","/assets/ken-mail.png")
      document.getElementById('icon-linkedin')?.setAttribute("src","/assets/ken-linkedin.svg")
      document.getElementById('icon-github')?.setAttribute("src","/assets/ken-github.svg")

      let ghIcons = Array.from(document.getElementsByClassName('ken-gh-icon'))
      ghIcons.forEach(icon => {
        icon.setAttribute("src","/assets/ken-github.svg")
      })

      let linkIcons = Array.from(document.getElementsByClassName('ken-link-icon'))
      linkIcons.forEach(icon => {
        icon.setAttribute("src","/assets/ken-link.svg")
      })

      //let bfIcon = document.getElementById('bf-icon')
      //bfIcon?.classList.add('icon-ken')

    } else {
      // switch to Barbie Mode
      console.log("Hellooooo Barbie")
      this.isKen = false

      // toggle link colors
      let links = Array.from(document.getElementsByClassName('nav-item'))
      links.forEach(link => {
        link.classList.remove('ken');
        link.classList.add('barbie');
      });

      // toggle h2 colors
      let h2s = Array.from(document.getElementsByTagName('h2'))
      h2s.forEach(h2 => {
        h2.style.color = this.barbieTheme[2]
      });

      // toggle card colors
      let cards = Array.from(document.getElementsByClassName('card'))
      cards.forEach(card => {
        card.classList.remove('ken')
      });

      // toggle tag colors
      let tags = Array.from(document.getElementsByClassName('tag'))
      tags.forEach(tag => {
        let onetag = tag as HTMLElement
        onetag.style.color = this.barbieTheme[1]
        onetag.style.borderColor = this.barbieTheme[1]
      })
    
      // toggle bg color
      document.getElementsByTagName('main')[0].style.backgroundColor = this.barbieTheme[0]
      document.getElementsByTagName('body')[0].style.backgroundColor = this.barbieTheme[0]

      // toggle h1, button
      document.getElementsByTagName('h1')[0].style.color = this.barbieTheme[1]
      document.getElementById('open-cv')?.classList.remove('ken')    

      // toggle images
      document.getElementById('icon-email')?.setAttribute("src","/assets/email.svg")
      document.getElementById('icon-linkedin')?.setAttribute("src","/assets/linkedin.svg")
      document.getElementById('icon-github')?.setAttribute("src","/assets/github.svg")

      let ghIcons = Array.from(document.getElementsByClassName('ken-gh-icon'))
      ghIcons.forEach(icon => {
        icon.setAttribute("src","/assets/github.svg")
      })

      let linkIcons = Array.from(document.getElementsByClassName('ken-link-icon'))
      linkIcons.forEach(icon => {
        icon.setAttribute("src","/assets/link.svg")
      })


    }
  }

}


