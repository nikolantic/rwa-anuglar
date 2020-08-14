import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from 'src/app/models/book-item.model';
import { ActivatedRoute } from '@angular/router';
import {  map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-cart-list',
  templateUrl: './my-cart-list.component.html',
  styleUrls: ['./my-cart-list.component.css']
})
export class MyCartListComponent implements OnInit {

  state$: Observable<object>;
  
  constructor(public activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
  }

  

}
