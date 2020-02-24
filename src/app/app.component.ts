import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Observable, Subscription } from 'rxjs-compat';
import { Slide } from './carousel/carousel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isactive = true;
  title = 'my-app';
  projects = [
    {
      title: 'Minesweeper ReactJS Game',
      description: 'this is a classic Minesweeper game with bombs and flags and animations,This was my first project in ReactJS',
      links: 'https://maheshvee23.blogspot.com/2020/02/minesweeper-game-made-in-reactjs.html'
    },


  ];
  slides: Slide[] = [
    {
      title: 'Angular',
      description: 'angular',
      src: 'angular1.png',
      links: 'https://maheshvee23.blogspot.com/'
    },
    {
      title: 'Node.js',
      description: 'Node.js',
      src: 'nodejs.png',
      links: 'https://maheshvee23.blogspot.com/'
    },
    {
      title: 'React.js',
      description: 'React.js',
      src: 'reactjs.png',
      links: 'https://maheshvee23.blogspot.com/'
    },
    {
      title: 'MongoDb',
      description: 'MongoDb',
      src: 'Mongo.png',
      links: 'https://maheshvee23.blogspot.com/'
    },

  ];

  ngOnInit() {
    let options = {
      strings: ['Angular.', 'React.', 'Mongodb.', 'Frontend.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      // cursorChar: '|',
      loop: true
    }

    let typed = new Typed('.typing-element', options);
  }



  handleclick() {
    this.isactive = !this.isactive;
  }

}



