import { Component, OnInit,Input } from '@angular/core';
import { Slide } from './carousel.interface';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() slides: Slide[];

  currentSlide = 0;

  constructor() { }


//   public slides = [
//     {
//       title: "Angular",
//       description: 'angular',
//       src : 'angular1.png',
//        links: 'https://maheshvee23.blogspot.com/'
//     },
//     {
//       title: "Node.js",
//       description: 'Node.js',
//       src : 'nodejs.png',
//       links: 'https://maheshvee23.blogspot.com/'
//     },
//     {
//       title: "React.js",
//       description: 'React.js',
//       src : 'reactjs.png',
//       links: 'https://maheshvee23.blogspot.com/'
//     },
//     {
//       title: "MongoDb",
//       description: 'MongoDb',
//       src : 'Mongo.png',
//       links: 'https://maheshvee23.blogspot.com/'
//     },

// ];
  onPreviousClick(){
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0? this.slides.length - 1: previous;
    console.log("previous clicked new current slide is", this.currentSlide);
  }
  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
