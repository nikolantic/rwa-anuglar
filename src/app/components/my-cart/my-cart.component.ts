import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from 'src/app/models/book-item.model';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor() { }
  @Input() product: BookItem;
  ngOnInit(): void {
  }

}
