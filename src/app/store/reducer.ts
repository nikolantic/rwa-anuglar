import { ActionsUnion, ActionTypes } from './action';
import { BookSame } from '../models/book-same.model';

    export const initialState = {
      items: [],
      cart: [],
      same:[],
    };
    const bookExist=(books,book)=>{
      return books.cart.find(((e)=>e.id===book.id));
    }
    
  
    export function ShopReducer(state = initialState, action: ActionsUnion) {
    
        switch (action.type) {
          case ActionTypes.LoadSuccess:
            console.log(action.payload)
            return {
              ...state,
              items: [...action.payload]
            };
      
          case ActionTypes.Add:
           
            if(bookExist(state,action.payload)){
              return {
                ...state,
                same: [...state.same, action.payload], 
              };
            }
            else{
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          }
         
          case ActionTypes.Remove:
            return {
              ...state,
              cart: [...state.cart.filter(item => item.name !== action.payload.name)],
              same: [...state.same.filter(item => item.name !== action.payload.name)]
              //pokusaj kad nadje prvi da samo njega izbaci!
            };

            
      
          default:
            return state;
        }
      }