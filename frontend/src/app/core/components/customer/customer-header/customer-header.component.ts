import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectOrderCount} from '../../../../features/customer/store/customer.selectors';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-customer-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './customer-header.component.html',
})
export class CustomerHeaderComponent {
  orderCount$!: Observable<number>;

  constructor(private readonly store: Store) {
    this.orderCount$ = this.store.select(selectOrderCount);
  }
}
