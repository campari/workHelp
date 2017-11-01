import { Recipe } from "../recipe-book/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/igredient.model";
import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    //recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Gulas', 
        'Super gulas', 
        'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cajun_seafood_gumbo.jpg',
    [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 2),

    ]),
        new Recipe('Placka', 
        'Bezva placka', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Veganer_D%C3%B6ner.jpg/640px-Veganer_D%C3%B6ner.jpg',
    [
        new Ingredient('Friut', 1),
        new Ingredient('Gemuse', 2),
    ]),
        new Recipe('Plody more', 
        'Ble', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Chholar_Daal_%28Bengal_Gram_recipe%29.jpg/640px-Chholar_Daal_%28Bengal_Gram_recipe%29.jpg',
    [
        new Ingredient('Rohlik', 5),
        new Ingredient('Maso', 1),
    ]),
    
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      
      setRecipes(recipes){
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());

      }
      
      updateRecipe(index: number,recipe: Recipe){
        this.recipes[index]= recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}