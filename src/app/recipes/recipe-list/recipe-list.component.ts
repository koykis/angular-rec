import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'http://3.bp.blogspot.com/-vu9YPd9Cb6Q/UdpvCFC_gdI/AAAAAAAAZSM/Jf7Kv2W0SQ8/s1600/recipe-book-design-5c.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
