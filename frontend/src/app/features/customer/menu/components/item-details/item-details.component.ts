import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Recipe} from '../../menu.model';
import {Store} from '@ngrx/store';
import {addRecipeToOrders} from '../../../store/customer.actions';


@Component({
  selector: 'app-item-details',
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  standalone: true,
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  @Input() recipe!: Recipe;

  constructor(private store: Store) {
  }

  orderNow() {
    this.store.dispatch(addRecipeToOrders(this.recipe));
  }
}
