import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {CategoryModel} from '../category.model';

export const CategoryActions = createActionGroup({
  source: 'Categories',
  events: {
    'Load Categories': emptyProps(),
    'Load Categories Success': props<{ categories: CategoryModel[] }>(),
    'Load Categories Failure': props<{ error: string }>(),
    'Add Category': props<{ category: CategoryModel }>(),
    'Add Category Success': props<{ category: CategoryModel }>(),
    'Add Category Failure': props<{ error: string }>(),
    'Update Category': props<{ category: CategoryModel }>(),
    'Delete Category': props<{ id: number }>(),
  }
});
