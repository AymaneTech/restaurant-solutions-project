import {Component} from '@angular/core';
import {MenuSectionComponent} from '../../components/menu-section/menu-section.component';

@Component({
  selector: 'app-menu-page',
  imports: [
    MenuSectionComponent
  ],
  templateUrl: './menu-page.component.html',
  standalone: true,
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {

}
