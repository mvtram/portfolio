import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Observable, Subscription } from 'rxjs-compat';
import { Slide } from './carousel/carousel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isactive = true;
  title = 'my-app';
  handleclick() {
    this.isactive = !this.isactive;
  }

}



