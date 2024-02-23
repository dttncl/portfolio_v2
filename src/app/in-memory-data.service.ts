import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
    {
      name: 'Restaurant Menu Website',
      languages: ['HTML', 'CSS', 'Javascript'],
      desc: 'This is a responsive restaurant menu website created for my Web Development class. It uses DOM to manipulate HTML elements, handle events, and update the content dynamically.',
      github: 'https://github.com/dttncl/DagatRestaurant',
      live: 'https://dttncl.github.io/DagatRestaurant/',
    },
    {
      name: 'Villagô - Virtual Service Finder',
      languages: ['Javascript', 'PHP', 'MySQL', 'GoogleMaps API'],
      desc: 'This is presented as my final project for web server. It comes with a search feature, enabling users to find service providers that meet their specific needs and a map to locate nearby service providers. PHP is used for server-side processing such as interacting with database and processing form submissions.',
      github: 'https://github.com/dttncl/villago',
      live: 'not-available',
    },
    {
      name: 'Personal Portfolio',
      languages: ['Angular', 'TypeScript', 'SASS', 'Web API'],
      desc: 'A platform where you can explore my work, learn about my background, and get in touch. From web development to design, I thrive on turning ideas into reality.',
      github: 'https://github.com/dttncl/portfolio_v2',
      live: 'not-available',
    },
    {
      name: 'MultiForm Windows',
      languages: ['C#', 'Windows Forms'],
      desc: 'Developed as the final project for Object Oriented Programming using C# and Windows Forms, this application offers essential tools seamlessly integrated into a user-friendly interface. With the Number Generator, Calculator, Converters, and Validator modules, managing various tasks becomes effortless.',
      github: 'https://github.com/dttncl/MultiWinFormsProject',
      live: 'not-available',
    },
    {
      name: 'Etch-A-Sketch',
      languages: ['HTML', 'CSS', 'JavaScript'],
      desc: 'This is my take on Etch-A-Sketch with colors resembling the my (artistic) childhood. HTML, CSS and JavaScript were used to create the virtual canvas. Sketching was made through DOM EventListeners.',
      github: 'https://github.com/dttncl/etch-a-sketch',
      live: 'https://dttncl.github.io/etch-a-sketch/',
    },
    {
      name: 'BillBee - Bill Management',
      languages: ['Android', 'Java', 'XML'],
      desc: 'This intuitive bill management app is designed for my final Android project. With BillBee, users can effortlessly organize, track, and manage all your bills in one convenient place.',
      github: 'https://github.com/dttncl/bill-management-app',
      live: 'not-available',
    }];

    return {projects};
  }
}

