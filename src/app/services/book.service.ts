import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import {BookItem} from '../models/book-item.model';
import { catchError, map, mergeMap, concatAll, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dbUrl = 'api';
  private bookItemsUrl=`${this.dbUrl}/bookItems`

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'database api', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, operation);
      return of(result as T);
    };
  }

  getAllBookItems(){
    return this.http
    .get<Array<BookItem>>(this.bookItemsUrl);
    
  }
}
