import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient} from './../../shared/igredient.model';
import { ShoppingListService } from "../shopping-list.service";

import {NgForm} from '@angular/forms';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('f') form : NgForm;
  @Output() addedIng = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editedItemId = -1;
  
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
       (number: number) => {
         this.editedItemId = number;
         const ingredient = this.shoppingListService.getIngredient(number);
         this.form.form.patchValue({
           name: ingredient.name,
           amount: ingredient.amount
         });
       }
    );
  }

  onSubmit(form: NgForm){     
    //this.addedIng.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
   // this.shoppingListService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
   const newIngredient = new Ingredient(form.form.get('name').value, form.form.get('amount').value);
   if(this.editedItemId === -1){
      this.shoppingListService.addIngredient(newIngredient);
   }else{
    this.shoppingListService.updateIngredient(this.editedItemId, newIngredient);
    this.editedItemId = -1;

   }
   form.reset();

  }


  onClear(){
    this.form.reset();
    this.editedItemId = -1;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemId);
    this.onClear;
  }  


}
