import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {CategoryActions} from './category.actions';
import {CategoryService} from '../category.service';

@Injectable({providedIn: 'root'})
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(CategoryActions.loadCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map(categories => CategoryActions.loadCategoriesSuccess({categories})),
          catchError(error =>
            of(CategoryActions.loadCategoriesFailure({
              error: error.message
            }))
          )
        )
      )
    )
  );

  // addCategory$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CategoryActions.addCategory),
  //     mergeMap(action =>
  //       this.categoryService.createCategory(action.category).pipe(
  //         map(category => CategoryActions.addCategorySuccess({ category })),
  //         catchError(error =>
  //           of(CategoryActions.addCategoryFailure({ error: error.message }))
  //         )
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {
  }
}
