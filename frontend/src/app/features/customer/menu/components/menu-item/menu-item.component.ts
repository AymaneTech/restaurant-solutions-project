import {Component, Input} from '@angular/core';
import {MenuCategory, Recipe} from '../../menu.model';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  standalone: true,
})
export class MenuItemComponent {
  @Input() recipe!: Recipe;

}
