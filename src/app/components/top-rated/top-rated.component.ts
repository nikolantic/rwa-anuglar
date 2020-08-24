import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BookItem } from 'src/app/models/book-item.model';
import { GetItems } from 'src/app/store/action';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  constructor(private store: Store<{ items: BookItem[]; cart: [];shop:any }>) {
    this.store.pipe(select('shop')).subscribe(data =>{(this.items = data['items'])
    console.log("HOME COMP")
    });
  }
  
    items:BookItem[]=[];
  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }

}
