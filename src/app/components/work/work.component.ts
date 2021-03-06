import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  Category_projects = [];
  Work_projects = [
    {
      work_title: 'MineSweeper game',
      work_tag: 'React',
      work_img: 'minesweeper-gamev2',
      work_url: '#'
    },
    {
      work_title: 'Todos List React',
      work_tag: 'React',
      work_img: 'todo_list',
      work_url: 'https://todos-mvtram.herokuapp.com/'
    },

  ];

  isSelected = true;
  isAngularSelected: boolean;
  isReactSelected: boolean;
  isNodejsSelected: boolean;

  bntStyle = 'category-type-not-selected';

  constructor() { }

  ngOnInit() {
    this.isAngularSelected = false;
    this.isReactSelected = false;
    this.isNodejsSelected = false;
    console.log('entered into work component');
  }

  getAllWork(): any {
    this.isSelected = true;
    this.isAngularSelected = false;
    this.isReactSelected = false;
    this.isNodejsSelected = false;
    console.log('category', this.Work_projects);
    return this.Work_projects;
  }

  getWorkbyCategory(category): any {
    this.Category_projects = this.Work_projects;
    this.isSelected = false;
    if (category === 'Angular') {
      this.isAngularSelected = true;
      this.isReactSelected = false;
      this.isNodejsSelected = false;
    } else if (category === 'React') {
      this.isAngularSelected = false;
      this.isReactSelected = true;
      this.isNodejsSelected = false;
    } else if (category === 'Nodejs') {
      this.isAngularSelected = false;
      this.isReactSelected = false;
      this.isNodejsSelected = true;
    }
    this.Category_projects = this.Work_projects.filter((work, i) => {
      return work.work_tag === category;
    });
  }


}
