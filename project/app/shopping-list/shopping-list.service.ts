
import { Ingredient } from "../shared/igredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
   // ingredientsChanged = new EventEmitter<Ingredient[]>();
   startedEditing = new Subject<number>();
   ingredientsChanged = new Subject<Ingredient[]>();
    private ingrediens: Ingredient[] = [
        new Ingredient("Voda", 1),
        new Ingredient("sul", 2),
        new Ingredient("pepr", 3),
      ];

      addIngredient(ingredient){
        this.ingrediens.push(ingredient);
        //this.ingredientsChanged.emit(this.ingrediens.slice());
        this.ingredientsChanged.next(this.ingrediens.slice());
      }

      getIngredients(){
          return this.ingrediens.slice();
      }
      
      getIngredient(number: number){
        return this.ingrediens[number];
      }

      addIngredients(ingrediens: Ingredient[]){
         // for(let ingredient of ingrediens){
         //     this.addIngredient(ingredient);
         // }
         this.ingrediens.push(...ingrediens);
         //this.ingredientsChanged.emit(this.ingrediens.slice());
         this.ingredientsChanged.next(this.ingrediens.slice());
      }


      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingrediens[index] = newIngredient;
        this.ingredientsChanged.next(this.ingrediens.slice());

      }

      deleteIngredient(index: number){
        this.ingrediens.splice(index,1);
        this.ingredientsChanged.next(this.ingrediens.slice());
      }
}