import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Ingredient } from './shopping/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  public recipes: Recipe[] = [
    new Recipe(
      'Meat & Potatoes',
    'Get your protein!',
    'https://cdn.pixabay.com/photo/2017/08/11/00/32/main-course-2629258_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Potato', 3)
    ]),
    new Recipe(
      'Fruity Pebbles',
    'Breakfast of Champions',
    'https://live.staticflickr.com/8372/8495662913_1654dc0c00_z.jpg',
    [
      new Ingredient('Milk', 1),
      new Ingredient('Cereal', 4)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    alert('Recipe deleted!');
  }
}
