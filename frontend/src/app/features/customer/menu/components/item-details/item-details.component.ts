import {Component, Input, OnChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Recipe} from '../../menu.model';
import {Store} from '@ngrx/store';
import {addRecipeToOrders, incrementOrderCount} from '../../../store/customer.actions';


@Component({
  selector: 'app-item-details',
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnChanges {
  @Input() recipe!: Recipe;

  constructor(private store: Store) {
  }

  ngOnChanges() {
    console.log('Recipe received in ItemDetailsComponent:', this.recipe);
  }

  orderNow() {
    this.store.dispatch(incrementOrderCount());
    this.store.dispatch(addRecipeToOrders(this.recipe));
  }
}
