import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, Input } from '@angular/core';
import { Recipe } from '../../menu.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule, ItemDetailsComponent],
  // import { Recipe } from './../../menu.model';
templateUrl: './menu-item.component.html',

})
export class MenuItemComponent {
  @Input() recipe!: Recipe;
  showPopup = false;
  openPopup(): void {    
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
