import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
export interface Post {
  id: number;
  blog: {
    id: string;
  };
  published: string;
  url: string;
  title: string;
  content: string;
}



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  errorMsg = '';
  isLoading = true;
  posts: any[];
  allitems: any[];
  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts(): void {
    this.blogsService.getAllPosts().subscribe(
      (data: any) => {
        this.isLoading = true;
        this.allitems = data.items;
        this.posts = this.allitems.map((val, i) => {
          const dt = new Date(val.published);
          const published = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
          val.published = published;
          return val;
        });
        this.isLoading = false;
      }, error => {
        this.errorMsg = error;
      });

  }


}
