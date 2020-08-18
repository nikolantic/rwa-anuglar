import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookItem } from 'src/app/models/book-item.model';
import { ActivatedRoute } from '@angular/router';
import {  map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { RemoveFromCart, AddToCart, AddToCartSame } from 'src/app/store/action';
import { Store, select } from '@ngrx/store';
import { BookSame } from 'src/app/models/book-same.model';

@Component({
  selector: 'app-my-cart-list',
  templateUrl: './my-cart-list.component.html',
  styleUrls: ['./my-cart-list.component.css']
})
export class MyCartListComponent implements OnInit {

  /*

  state$: Observable<object>;
  datas:BookItem[]=[];
  totalPrice:number;
  constructor(public activatedRoute: ActivatedRoute,private store: Store<{ items: []; cart: [] }>) {}
  
  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
    this.state$.subscribe(x=>this.datas=x['product'])
    console.log(this.datas)
  }

  */
 constructor(private store: Store<{ items: []; cart: []; price:Number ;shop}>) {
  store.pipe(select('shop')).subscribe(data => {(this.cart = data['cart'])
    console.log(data)
    this.cartOfSame=data['same']
  });
  
}
count:number;
cart  = [];
cartOfSame=[];
sameBook:BookItem[];
;
ngOnInit() {
  
}

removeFromCart(item: BookItem) {
  
  this.store.dispatch(new RemoveFromCart(item)); 
}

addToCart(item: BookItem) {
 
  this.store.dispatch(new AddToCartSame(item));
  
}



  

}
