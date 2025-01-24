import {Recipe} from '../recipes/recipe.module';

export interface CategoryModel {
  id: number;
  name: string;
  itemCount: number;
  status: 'active' | 'inactive';
  description: string;
  image: string;
  recipes: Recipe[]
}
