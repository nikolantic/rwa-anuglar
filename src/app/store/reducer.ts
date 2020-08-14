import { ActionsUnion, ActionTypes } from './action';
    
    export const initialState = {
      items: [],
      cart: []
    };
    export function ShopReducer(state = initialState, action: ActionsUnion) {
        switch (action.type) {
          case ActionTypes.LoadSuccess:
            console.log(action.payload)
            return {
              ...state,
              items: [...action.payload]
            };
      
          case ActionTypes.Add:
            console.log(action.payload)
            return {
              ...state,
              cart: [...state.cart, action.payload]
            };
      
          case ActionTypes.Remove:
            return {
              ...state,
              cart: [...state.cart.filter(item => item.name !== action.payload.name)]
            };
      
          default:
            return state;
        }
      }