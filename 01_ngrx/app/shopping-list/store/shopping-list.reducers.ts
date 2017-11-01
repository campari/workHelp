import { Action } from "@ngrx/store";
import { Ingredient } from "app/shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';


export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 1),
        new Ingredient('Mandarin', 3),
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type){
        case ADD_INGREDIENT:
        return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
        }
        case ADD_INGREDIENTS:return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload]
        }
        default: 
            return state;
    }
    
 }