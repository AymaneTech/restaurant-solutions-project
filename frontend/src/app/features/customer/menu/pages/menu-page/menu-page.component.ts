import { Component, OnInit } from '@angular/core';
import { MenuSectionComponent } from '../../components/menu-section/menu-section.component';
import { MenuCategory } from '../../menu.model';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-page',
  imports: [MenuSectionComponent],
  templateUrl: './menu-page.component.html',
  standalone: true,
})
export class MenuPageComponent implements OnInit {
  protected categories!: MenuCategory[];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    return this.menuService
      .getMenuCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
