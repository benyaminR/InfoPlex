import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment';



export interface Blog {
  author?: string;
  title?: string;
  content?: string;
  date?: Date;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = ''; // Your Spring Boot API URL

  constructor(private http: HttpClient) {
    this.apiUrl = environment.backend_endpoint;
    console.log(this.apiUrl);
  }

  addBlog(author: string, title: string, content: string): Observable<Blog> {
    var date = new Date();
    var blog = { author, title, content, date } as Blog;
    return this.http.post(this.apiUrl + '/add-blog', blog).pipe(catchError(this.handleError));
  }

  editBlog(id: number, author: string, title: string, content: string): Observable<Blog> {
    var date = new Date();
    var blog = { author, title, content, date, id } as Blog;
    return this.http.put(this.apiUrl + '/update-blog', blog);
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(this.apiUrl + '/blogs/' + id);
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl + '/blogs');
  }

  private handleError(error: any) {
    // Custom error handling logic
    console.error('An error occurred:', error.error.message);
    // Transform the error for the user consumption
    let errMsg = (error.error instanceof ErrorEvent) ?
      `An error occurred: ${error.error.message}` :
      `Backend returned code ${error.status}: ${error.body.error}`;
    // Return an observable with a user-facing error message
    return throwError(() => new Error(errMsg));
  }

  // handleError(method: string, blog: Blog) {

  //   console.log(method, blog);
  //   return (error: HttpErrorResponse) => {
  //     console.log(error);
  //     if (error.status === 0) {
  //       // A client-side or network error occurred. Handle it accordingly.
  //       console.error('An error occurred:', error.error);
  //     } else {
  //       // The backend returned an unsuccessful response code.
  //       // The response body may contain clues as to what went wrong.
  //       console.error(
  //         `Backend returned code ${error.status}, body was: `, error.error);
  //     }
  //     // Return an observable with a user-facing error message.
  //     return throwError(() => new Error('Something bad happened; please try again later.'));
  //   };
  // }
}