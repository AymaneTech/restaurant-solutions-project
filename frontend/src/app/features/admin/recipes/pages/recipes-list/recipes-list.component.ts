import { Component } from '@angular/core';
import {CategoryItemComponent} from '../../../categories/pages/category-item/category-item.component';
import {RecipesItemComponent} from '../recipes-item/recipes-item.component';
import {Recipe} from '../../../../customer/menu/menu.model';

@Component({
  selector: 'app-recipes-list',
  imports: [
    CategoryItemComponent,
    RecipesItemComponent
  ],
  templateUrl: './recipes-list.component.html',
  standalone: true
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      description: 'Italian Cuisine',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 12.99,
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Seafood',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 18.99,
    },
    {
      id: 3,
      name: 'Suui Salad',
      description: 'Fresh vegetables with a creamy dressing',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 10.99,

    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Fresh vegetables with a creamy dressing',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 9.99,

    },
    {
      id: 3,
      name: 'Salad',
      description: 'Fresh vegetables with a creamy dressing',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 14.14,

    },
    {
      id: 3,
      name: 'Cae d sar',
      description: 'Fresh vegetables with a creamy dressing',
      image: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg',
      price: 9.99,

    },
  ];

}
