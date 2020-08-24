import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems} from 'src/app/store/action';
import { BookItem } from 'src/app/models/book-item.model';
import { Observable, Subject } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import {  map } from 'rxjs/operators';

    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      /*
      constructor(private store: Store<{ items: BookItem[]; cart: [];shop:any }>,private bookItemService: BookService) {
        this.store.pipe(select('shop')).subscribe(data =>{(this.items = data['items'])
        console.log("HOME COMP")
        });
      }
      */
     constructor(private bookItemService: BookService){}

      public specificBookGenre$: Subject<string> = new Subject();
      public specificBookName$: Subject<string> = new Subject();
      items: BookItem[] = [];
      public allBooks$: Observable<Array<BookItem>>;
      
        

      
      ngOnInit():void {
        //this.store.dispatch(new GetItems());
       
       this.allBooks$=this.bookItemService.getAllBookItems$().pipe(take(1));
       this.allBooks$.subscribe(books=>this.items=books)

        this.specificBookGenre$.pipe(
          switchMap((bookGenre: string) => this.bookItemService.getAllBookItemsFromGenres$(bookGenre)))
          .subscribe((bookItemsToDisplay: Array<BookItem>) => {
           
            this.items = bookItemsToDisplay; console.log(this.items+"FILTRIRANO"); });
        
        this.specificBookName$.pipe(
          switchMap((bookGenre: string) => this.bookItemService.getBookItemByName$(bookGenre)))
          .subscribe((bookItemsToDisplay: Array<BookItem>) => {
           
            this.items = bookItemsToDisplay; console.log(this.items+"FILTRIRANO"); });
    
      }

      searchedBookGenreName(bookGenre: string): void { this.specificBookGenre$.next(bookGenre); }
      searchedBookName(bookName: string): void { this.specificBookName$.next(bookName); }
    }
