
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { RecipeService } from "../recipe-book/recipe.services";
import { AuthService } from "../auth/auth.service";

import { Recipe } from "../recipe-book/recipe.model";



@Injectable()
export class DataStorageService{
    constructor(private http: Http, 
                private recipeService: RecipeService,
                private authService: AuthService){

    }
    storeRecipes(): Observable<any>{
        return this.http.put('https://udemy-ng-http-a0309.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes(){
        let token = this.authService.getToken();

        return this.http.get('https://udemy-ng-http-a0309.firebaseio.com/recipes.json?auth='+token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
              
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}