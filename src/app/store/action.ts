import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {BookItem} from '../models/book-item.model'

export enum ActionTypes{
    Add = '[Product] Add to cart',
    Remove = '[Product] Remove from cart',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success',
    AddSame='[Product] Add to cartSame'
   
}


export class AddToCart implements Action {
    readonly type = ActionTypes.Add;
  
    constructor(public payload: BookItem) {}
  }

  export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;
  }
 
  export class RemoveFromCart implements Action {
    readonly type = ActionTypes.Remove;
  
    constructor(public payload: BookItem) {}
  }
  
  
  export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;
  
    constructor(public payload: BookItem[]) {}
  }
  
  export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems  ;    