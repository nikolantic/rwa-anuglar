import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import {BookItem} from '../models/book-item.model';
import { catchError, map, mergeMap, concatAll, first,switchMap } from 'rxjs/operators';
import { BookGenre } from '../models/book-genre.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dbUrl = 'api';
  private bookItemsUrl=`${this.dbUrl}/bookItems`
  private bookGenreUrl=`${this.dbUrl}/bookGenre`

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'database api', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, operation);
      return of(result as T);
    };
  }

  getAllBookItems$():Observable<Array<BookItem>>{
    return this.http
    .get<Array<BookItem>>(this.bookItemsUrl);
    
  }

  getAllBookItemsFromGenres$(bookGenres:string){
    if(bookGenres=='All'){
      return this.http
    .get<Array<BookItem>>(this.bookItemsUrl);
    }
    console.log(bookGenres);
    return this.http.get<Array<BookGenre>>(
      `${this.bookGenreUrl}/?name=${bookGenres}`
    ).pipe(
      concatAll(),
        switchMap((genre: BookGenre) =>
          this.http.get<Array<BookItem>>(
            `${this.bookItemsUrl}/?genre=${genre.name}`
          )
        )
    ); 
  }


  getAllBookGenres$(): Observable<Array<string>> {
    return this.http
      .get<Array<BookGenre>>(this.bookGenreUrl)
      .pipe(
        map((bookGenres: Array<BookGenre>) => {
          const allBookGenresNames: Array<string> = bookGenres.map(
            (bookGenre: BookGenre) => bookGenre.name
          );
          
          return allBookGenresNames;
        })
        
      );
  }

  getBookItemByName$(pattern: string): Observable<Array<BookItem>> {
    if (!pattern.trim()) { this.getAllBookItems$() }
    return this.http
      .get<Array<BookItem>>(`${this.bookItemsUrl}/?name=${pattern}`)
  }
}


