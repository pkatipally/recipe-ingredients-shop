import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../header/shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [new Ingredient('Orange', '4'), new Ingredient('Banana', '2')];
  constructor() { }

  ngOnInit() {
  }

}
