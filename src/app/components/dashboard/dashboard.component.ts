
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Observable, Subscription } from 'rxjs-compat';
import { Router, ActivatedRoute } from '@angular/router';
import { Slide } from '../../carousel/carousel.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  constructor(private fb: FormBuilder, private dashboardService: DashboardService) {

  }

  submitted = false;
  message = '';
  public profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    contact: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
  });

  // Validators.pattern('^((\+){1}91){1}[1-9]{1}[0-9]{9}$')

  isactive = true;
  title = 'my-app';
  users: any = [];


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
      strings: ['AngularJs.', 'ReactJs.', 'NodeJs.', 'Frontend.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }


  get f() { return this.profileForm.controls; }


  onSubmit(): void {
    this.submitted = true;
    if (this.profileForm.valid) {
      console.log('profile form', this.profileForm.controls);

      // this.dashboardService.getUsers().subscribe(
      //   user => {
      //     console.log(user);
      //   }
      //   );
      this.dashboardService.createUser(this.profileForm.value).subscribe(
        user => {
          console.log(user);

          this.submitted = false;
          this.message = 'Thank you for registering!!';
          this.profileForm.markAsPristine();
          this.profileForm.markAsUntouched();
          this.profileForm.reset();
        }
      );

      console.log('form value', this.profileForm.value);
    }


  }

  handleclick() {
    this.isactive = !this.isactive;
  }



}






