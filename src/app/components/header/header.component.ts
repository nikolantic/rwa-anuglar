import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BookItem } from 'src/app/models/book-item.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }
  cart  = [];

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
