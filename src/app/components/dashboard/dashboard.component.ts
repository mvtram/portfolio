
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Observable, Subscription } from 'rxjs-compat';
import { Router, ActivatedRoute } from '@angular/router';
import { Slide } from '../../carousel/carousel.interface';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profileForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
  });
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


   Experience = 'Hi my name is Mahesh Venkatraman and welcome to my site.I am a Software Developer based in mumbai India' +
  'I am passionate about Web Development and Competitive codings';

  AboutMe = 'Hi my name is Mahesh Venkatraman and welcome to my site.' +
  'I am based in mumbai,India.I am a Software Developer by Profession.A Writer,Footballer by Hobby.';



  ngOnInit() {
    const options = {
      strings: ['Angular.', 'React.', 'Mongodb.', 'Frontend.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }



  handleclick() {
    this.isactive = !this.isactive;
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }

}






