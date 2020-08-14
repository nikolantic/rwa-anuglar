import { Component,Output,EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BookItem } from './models/book-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'book-store';
  constructor(private store: Store<{ items: []; cart: [] }>) {
    //store.pipe(select('shop')).subscribe(data => {this.cart = data.cart;
   // console.log(this.cart)});
  }
  cart:BookItem[] = [];

  

 
  
 
}
