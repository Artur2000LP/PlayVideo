import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-cuerpo-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo-presentacion.component.html',
  styleUrl: './cuerpo-presentacion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class CuerpoPresentacionComponent {

  constructor(private searchService: SearchService, private navigationService: NavigationService) {}

  selectCategory(category: string) {
    this.navigationService.selectCategory(category);
  }
  
  optthor() {
    this.searchService.updateQuery('thor ');
  }
  optBrave() {
    this.searchService.updateQuery('Brave');
  }

  optelemental() {
    this.searchService.updateQuery('elemental');
  }
  optencanto() {
    this.searchService.updateQuery('encanto');
  }
  optOnePice() {
    this.searchService.updateQuery('One Piece');
  }
  optSensaCine() {
    this.searchService.updateQuery('up');
  }
  optToyStory() {
    this.searchService.updateQuery('Toy Story');
  }
  optWish() {
    this.searchService.updateQuery('Wish');
  }

}
