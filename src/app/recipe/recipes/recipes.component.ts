import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
