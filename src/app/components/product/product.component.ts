import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart} from 'src/app/store/action';
import { BookItem } from 'src/app/models/book-item.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

  export class ProductComponent implements OnInit {
    constructor(private store: Store<{ items: []; cart: [] }>) {}
  
   
    @Input() product: BookItem;
    @Input() productInCart: BookItem[];
    inCart:boolean

    addToCart(item: BookItem) {
    
   
        this.store.dispatch(new AddToCart(item));
      
      
      this.inCart = true;
    }
  
    removeFromCart(item: BookItem) {
      this.store.dispatch(new RemoveFromCart(item));
      this.inCart = false;
    }

    ngOnInit() {
      
    }
  }

