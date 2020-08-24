import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { take, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-genre-book-item',
  templateUrl: './genre-book-item.component.html',
  styleUrls: ['./genre-book-item.component.css']
})
export class GenreBookItemComponent implements OnInit {

  @Input() allBookGenres$: Observable<Array<string>>;
  @Output() bookGenreEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() bookNameEmitter: EventEmitter<string> = new EventEmitter<string>();
  public bookGenres:string[];
  public selectedBookGenre: string;
  constructor(private bookItemService: BookService) { }

  ngOnInit(){
    this.allBookGenres$ = this.bookItemService.getAllBookGenres$().pipe(take(1));
    this.allBookGenres$.subscribe((allBookGenres: Array<string>) => {
      console.log(allBookGenres);
      this.bookGenres = allBookGenres;
    }
  );
  }
  searchGivenBookGenre(bookGenre: string) { this.bookGenreEmitter.emit(bookGenre); }
  searchBookName(bookGenre: string) { this.bookNameEmitter.emit(bookGenre); }
}
