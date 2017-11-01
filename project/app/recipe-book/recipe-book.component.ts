import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService} from "./recipe.services";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
//  providers: []
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {

    //this.recipeService.recipeSelected.subscribe(
    //  (recipe) => this.selectedRecipe = recipe
    //);
  }

  onSelect(event){
    this.selectedRecipe = event;
  }

 

}
