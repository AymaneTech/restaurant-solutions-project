import {Component} from '@angular/core';
import {CategoryModel} from '../../category.model';
import {CategoryItemComponent} from '../category-item/category-item.component';

@Component({
  selector: 'app-categories-list',
  imports: [
    CategoryItemComponent
  ],
  standalone: true,
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent {
  categories: CategoryModel[] = [
    {
      id: 1,
      name: 'Main Course',
      itemCount: 45,
      status: 'inactive',
      description: 'Primary dishes including steaks, pasta, and seafood',
      imageUrl: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg'
    },
    {
      id: 2,
      name: 'Appetizers',
      itemCount: 28,
      status: 'active',
      description: 'Starters and small plates',
      imageUrl: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg'
    },
    {
      id: 3,
      name: 'ChiL3eiba',
      itemCount: 2,
      status: 'active',
      description: 'Starters and small plates',
      imageUrl: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg'
    },
    {
      id: 4,
      name: 'Makla',
      itemCount: 14,
      status: 'active',
      description: 'Starters and splates malpla tesl plates',
      imageUrl: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg'
    },
    {
      id: 5,
      name: 'Food',
      itemCount: 3,
      status: 'active',
      description: 'Starters and small plates',
      imageUrl: 'https://i.pinimg.com/736x/eb/85/38/eb8538955c86f8d685072e28a215b506.jpg'
    }
  ];

}
