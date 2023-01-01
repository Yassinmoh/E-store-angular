import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://fakestoreapi.com'




  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/products').pipe(
      // tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
      // catchError(this.handleError)
  }

  getFilterProducts(category:any) : Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products/category/'+category)
  }
















  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
      alert(errorMessage)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;

    }
    console.error(err);
    return throwError(() => errorMessage);
  }




}




