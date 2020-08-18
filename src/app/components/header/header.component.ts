import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select, ActionReducer, Action } from '@ngrx/store';
import { BookItem } from 'src/app/models/book-item.model';
import { Observable, Subject } from 'rxjs';
import { take, switchMap ,map} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(private store: Store<{ items: []; cart: []; price:Number ;shop}>) {
    store.pipe(select('shop')).subscribe(data => {(this.cart = data['cart'])
      this.cartOfSame=data['same'];
      this.sum=0;
      this.sumOfSame=0;
      console.log(data)
      this.cart.forEach(el=>this.sum=el.price+this.sum)
      this.cartOfSame.forEach(el=>this.sumOfSame=el.price+this.sumOfSame)
    });
    
  }
  mess:string;
  cart  = [];
  cartOfSame=[];
  sum:number;
  sumOfSame:number;
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
