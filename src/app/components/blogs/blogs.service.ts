import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Post } from './blogs.component';
import { CONFIG } from './blogconfig';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private posts$: Observable<Post[]>;
  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    // return this.httpClient.get<Post[]>(
    //   `https://www.googleapis.com/blogger/v3/blogs/${CONFIG.blogID}/posts?key=${CONFIG.API_KEY}`
    // );
    if (!this.posts$) {
      this.posts$ = this.httpClient.get<Post[]>(
        `https://www.googleapis.com/blogger/v3/blogs/${CONFIG.blogID}/posts?key=${CONFIG.API_KEY}`
      ).pipe(shareReplay(1));
    }

    return this.posts$;
  }



  errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error', errorResponse.error.message);

    } else {
      console.error('Serverside error', errorResponse);
    }

  }
}
