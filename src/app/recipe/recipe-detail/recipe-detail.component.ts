import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  i: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.i = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.i);
      }
    );
  }

  addToSL() {
    this.recipeService.addToSL(this.recipe.ingredients);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.i);
    this.router.navigate(['/recipes']);
  }

}
