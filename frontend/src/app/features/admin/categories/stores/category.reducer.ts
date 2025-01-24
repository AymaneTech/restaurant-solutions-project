import {CategoryModel} from '../category.model';
import {createFeature, createReducer, on} from '@ngrx/store';
import {CategoryActions} from './category.actions';

export interface CategoryState {
  categories: CategoryModel[];
  loading: boolean;
  error: string | null;
}

export const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
}

export const categoryFeature = createFeature({
  name: 'categories',
  reducer: createReducer(
    initialState,
    on(CategoryActions.loadCategories, state => ({...state, loading: true})),
    on(CategoryActions.loadCategoriesSuccess, (state, {categories}) => ({
      ...state,
      categories,
      loading: false
    })),
    on(CategoryActions.loadCategoriesFailure, (state, {error}) => ({
      ...state,
      error,
      loading: false
    }))
  )
})
