
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-barramenu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barramenu.component.html',
  styleUrls: ['./barramenu.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarramenuComponent {
  isSearchActive = false;
  searchQuery: string = '';

  constructor(private searchService: SearchService, private navigationService: NavigationService) {}

  toggleSearch(active: boolean) {
    this.isSearchActive = active;
  }
  selectCategory(category: string) {
    this.navigationService.selectCategory(category);
  }
  onSearch() {
    this.searchService.updateQuery(this.searchQuery);
  }
}
