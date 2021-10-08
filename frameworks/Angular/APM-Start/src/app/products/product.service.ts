import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {HttpClient , HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class ProductService {
    private baseUrl = ' http://127.0.0.1:5000/products';

    constructor(private http: HttpClient){}

    getProducts():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.baseUrl).pipe(
        tap(data=> JSON.stringify(data)),
        catchError(this.handleError)
      );
    }
    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}
