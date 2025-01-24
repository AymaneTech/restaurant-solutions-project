import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {CategoryItemComponent} from '../category-item/category-item.component';
import {selectAllCategories, selectCategoriesError, selectCategoriesLoading} from '../../stores/category.selectors';
import {CategoryActions} from '../../stores/category.actions';


@Component({
  selector: 'app-categories-list',
  imports: [
    CategoryItemComponent,
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories$;
  loading$;
  error$;

  isCreateModalOpen = false;

  constructor(private store: Store) {
    this.categories$ = this.store.select(selectAllCategories);
    this.loading$ = this.store.select(selectCategoriesLoading);
    this.error$ = this.store.select(selectCategoriesError);
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());
    this.categories$.subscribe(categories => console.log('categories', categories))
  }
}
