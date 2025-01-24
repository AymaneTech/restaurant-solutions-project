import {Component, Input} from '@angular/core';
import {CategoryModel} from '../../category.model';
import {CategoryActions} from '../../stores/category.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-category-item',
  imports: [],
  standalone: true,
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  @Input() category!: CategoryModel;

  constructor(private store: Store) {
  }

  getStatusClass(status: string): string {
    return `inline-block px-2 py-1 text-xs rounded-full mt-1 ${
      status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`;
  }


  onEdit() {
    this.store.dispatch(CategoryActions.updateCategory({category: this.category}));
  }

  onDelete() {
    this.store.dispatch(CategoryActions.deleteCategory({id: this.category.id}));
  }

}
