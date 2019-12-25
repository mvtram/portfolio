import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  projects = [
    {
      title: "Angular1",
      description: 'angular1',
      links: 'https://maheshvee23.blogspot.com/'
    },
    {
      title: "Angular2",
      description: 'angular2',
      links: 'https://maheshvee23.blogspot.com/'
    },
    {
      title: "Angular3",
      description: 'angular3',
      links: 'https://maheshvee23.blogspot.com/'
    },

];
}
