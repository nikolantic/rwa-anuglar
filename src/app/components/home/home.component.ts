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
      constructor(private store: Store<{ items: BookItem[]; cart: [];shop:any }>,private bookItemService: BookService) {
        store.pipe(select('shop')).subscribe(data =>{(this.items = data['items'])
        });
      }
      public specificBookGenre$: Subject<string> = new Subject();
      items: BookItem[] = [];
      
      
      ngOnInit() {
        this.store.dispatch(new GetItems());

        this.specificBookGenre$.pipe(
          switchMap((bookGenre: string) => this.bookItemService.getAllBookItemsFromGenres(bookGenre)))
          .subscribe((bookItemsToDisplay: Array<BookItem>) => {
            this.items = bookItemsToDisplay; console.log(this.items); });

            
           
      }

      searchedBookGenreName(bookGenre: string): void { this.specificBookGenre$.next(bookGenre); }
     
    }
