import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './action';
import {BookService} from '../services/book.service'


@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
  

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.bookService.getAllBookItems().pipe(
        map(books => {
          return { type: ActionTypes.LoadSuccess, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );

}

