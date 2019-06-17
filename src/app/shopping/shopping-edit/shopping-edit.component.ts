import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(ingredients: Ingredient[]) {
    this.shoppingListService.ingredientAdded.next(ingredients);
  }

}
