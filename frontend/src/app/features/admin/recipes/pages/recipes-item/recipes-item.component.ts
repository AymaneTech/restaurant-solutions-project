import {Component, Input} from '@angular/core';
import {Recipe} from '../../recipe.module';

@Component({
  selector: 'app-recipes-item',
  imports: [],
  templateUrl: './recipes-item.component.html',
  standalone: true
})
export class RecipesItemComponent {
  @Input() recipe!: Recipe;
}
