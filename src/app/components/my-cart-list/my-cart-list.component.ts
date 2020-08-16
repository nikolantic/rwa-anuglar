import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from 'src/app/models/book-item.model';
import { ActivatedRoute } from '@angular/router';
import {  map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { RemoveFromCart } from 'src/app/store/action';
import { Store, select } from '@ngrx/store';

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
  
  });
  
}
cart  = [];
;
ngOnInit() {
  
}
removeFromCart(item: BookItem) {
  this.store.dispatch(new RemoveFromCart(item)); 
}


  

}
