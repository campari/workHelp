import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.services";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Input() id: number;
 // @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.id);
  }

  /**
  onSelect(){
    //this.selectedRecipe.emit(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
    
  }
  */

}
