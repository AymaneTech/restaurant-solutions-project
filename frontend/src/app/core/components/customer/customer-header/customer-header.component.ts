import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-customer-header',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './customer-header.component.html',
})
export class CustomerHeaderComponent {}
