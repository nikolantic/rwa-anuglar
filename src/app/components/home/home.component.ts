import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from 'src/app/store/action';
import { BookItem } from 'src/app/models/book-item.model';
    
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      constructor(private store: Store<{ items: BookItem[]; cart: [];shop:any }>) {
        store.pipe(select('shop')).subscribe(data =>(this.items = data['items']));
      }
    
      items: BookItem[] = [];
    
      ngOnInit() {
        this.store.dispatch(new GetItems());
      }
    }
