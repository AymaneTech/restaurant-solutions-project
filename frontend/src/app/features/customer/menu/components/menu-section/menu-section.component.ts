import { Component } from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';

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

}
