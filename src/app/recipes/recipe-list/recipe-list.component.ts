import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Chicken', 'This is simply a test',
    'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2012/12/Year-in-Food-2012-Recipes-Feat-602x338.jpg'),
    new Recipe('Chicken Thanduri', 'This is simply a test',
      'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2012/12/Year-in-Food-2012-Recipes-Feat-602x338.jpg') ];
    constructor() {
}

ngOnInit() {

}


}
