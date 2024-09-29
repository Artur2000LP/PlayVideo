
// // src/app/menu/barralateral/barralateral.component.ts
// import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnInit } from '@angular/core';
// import { NavigationService } from '../../services/navigation.service';
// import { SearchService } from '../../services/search.service';

// @Component({
//   selector: 'app-barralateral',
//   standalone: true,
//   imports: [],
//   templateUrl: './barralateral.component.html',
//   styleUrls: ['./barralateral.component.css'],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class BarralateralComponent implements AfterViewInit {
//   constructor(
//     private navigationService: NavigationService, 
//     private searchService: SearchService
//   ) {}

 
//   ngAfterViewInit() {
//     this.initializeMenuToggle();
    
//   }

//   initializeMenuToggle() {
//     const menu = document.querySelector('.menu') as HTMLElement;
//     const barraLateral = document.querySelector('.barra-lateral') as HTMLElement;

//     menu.addEventListener('click', () => {
//       barraLateral.classList.toggle('max-barra-lateral');
//       if (barraLateral.classList.contains('max-barra-lateral')) {
//         menu.children[0].setAttribute('style', 'display: none');
//         menu.children[1].setAttribute('style', 'display: block');
//       } else {
//         menu.children[0].setAttribute('style', 'display: block');
//         menu.children[1].setAttribute('style', 'display: none');
//       }
//     });
//   }

//   selectCategory(category: string) {
//     this.navigationService.selectCategory(category);
//   }

//   searchQuery: string = '';
  
//   optionpeliculas() {
//     this.searchService.updateQuery('Transformers');
//   }

//   optcnanimes() {
//     this.searchService.updateQuery('One Piece');
//   }
//   optcNovela(){
//     this.searchService.updateQuery('Novela');
//   }

//   showHelp: boolean = false;

//   toggleHelp() {
//     this.showHelp = !this.showHelp;
//   }
  
 
// }


// src/app/menu/barralateral/barralateral.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-barralateral',
  standalone: true,
  imports: [],
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarralateralComponent implements AfterViewInit {
  private menuOpen = false;

  constructor(
    private navigationService: NavigationService, 
    private searchService: SearchService
  ) {}

  ngAfterViewInit() {
    this.initializeMenuToggle();
  }

  initializeMenuToggle() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const barraLateral = document.querySelector('.barra-lateral') as HTMLElement;

    menu.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from bubbling up
      this.menuOpen = !this.menuOpen;
      barraLateral.classList.toggle('max-barra-lateral', this.menuOpen);
      menu.classList.toggle('open', this.menuOpen);
      if (this.menuOpen) {
        document.addEventListener('click', this.handleClickOutside.bind(this));
      } else {
        document.removeEventListener('click', this.handleClickOutside.bind(this));
      }
    });
  }

  handleClickOutside(event: MouseEvent) {
    const menu = document.querySelector('.menu') as HTMLElement;
    const barraLateral = document.querySelector('.barra-lateral') as HTMLElement;
    if (!barraLateral.contains(event.target as Node) && !menu.contains(event.target as Node)) {
      this.menuOpen = false;
      barraLateral.classList.remove('max-barra-lateral');
      menu.classList.remove('open');
      document.removeEventListener('click', this.handleClickOutside.bind(this));
    }
  }

  selectCategory(category: string) {
    this.navigationService.selectCategory(category);
    this.closeMenu();
  }

  searchQuery: string = '';

  optionpeliculas() {
    this.searchService.updateQuery('Transformers');
    this.closeMenu();
  }

  optcnanimes() {
    this.searchService.updateQuery('One Piece');
    this.closeMenu();
  }

  optcNovela() {
    this.searchService.updateQuery('Novela');
    this.closeMenu();
  }

  showHelp: boolean = false;

  toggleHelp() {
    this.showHelp = !this.showHelp;
    this.closeMenu();
  }

  closeMenu() {
    const barraLateral = document.querySelector('.barra-lateral') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;
    this.menuOpen = false;
    barraLateral.classList.remove('max-barra-lateral');
    menu.classList.remove('open');
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }
}

