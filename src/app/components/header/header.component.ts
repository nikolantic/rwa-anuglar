import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select, ActionReducer, Action } from '@ngrx/store';
import { BookItem } from 'src/app/models/book-item.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private store: Store<{ items: []; cart: []; price:Number ;shop}>) {
    store.pipe(select('shop')).subscribe(data => {(this.cart = data['cart'])
      this.sum=0;
      this.cart.forEach(el=>this.sum=el.price+this.sum)
    });
    
  }
  cart  = [];
  sum:number;
  ngOnInit() {
  }

  /*
  display = false;
  onPress() {
    this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
  */

}
