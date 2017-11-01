import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/igredient.model';
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ingrediens: Ingredient[] = null;
  private subscription: Subscription;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingrediens = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => this.ingrediens = ingredients
    );
  }

  addIng(event){
    this.ingrediens.push(event);
  }

  onEditItem(id){
    this.shoppingListService.startedEditing.next(id);
  }


}
