import {
  Component, OnInit,/*, Output, EventEmitter*/ 
OnDestroy} from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.services";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = null;
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router,
  private route: ActivatedRoute) { }


  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
//
//  onSelect(event){
//    this.recipeWasSelected.emit(event);

 // }
 onNew(){
    this.router.navigate(['new'], {relativeTo: this.route} );
 }

}
