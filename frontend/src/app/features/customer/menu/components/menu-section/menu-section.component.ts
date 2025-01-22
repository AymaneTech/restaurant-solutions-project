import {Component, Input} from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {MenuCategory} from '../../menu.model';

@Component({
  selector: 'app-menu-section',
  imports: [
    MenuItemComponent
  ],
  templateUrl: './menu-section.component.html',
  standalone: true,
  styleUrl: './menu-section.component.css'
})
export class MenuSectionComponent {
  @Input() category!: MenuCategory;
}
