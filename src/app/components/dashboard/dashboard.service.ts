import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
   return this.httpClient.get<any>(
    `http://localhost:3000/users/`
   );
  }
  createUser(user): Observable<any> {
   return this.httpClient.post<any>(
    `http://localhost:3000/users/`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   );
  }


}
