import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from 'src/app/models/book-item.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @Input() books: BookItem[] = [];
  ngOnInit(): void {
  }

}
