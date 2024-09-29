/*
// src/app/services/navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private selectedCategorySource = new BehaviorSubject<string>('cuerpo-presentacion');
  selectedCategory$ = this.selectedCategorySource.asObservable();

  selectCategory(category: string) {
    this.selectedCategorySource.next(category);
  }
}
*/


// src/app/services/navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private selectedCategorySource = new BehaviorSubject<string>('cuerpo-presentacion');
  selectedCategory$ = this.selectedCategorySource.asObservable();

  private selectedMovieSource = new BehaviorSubject<any>(null);
  selectedMovie$ = this.selectedMovieSource.asObservable();

  selectCategory(category: string) {
    this.selectedCategorySource.next(category);
  }

  selectMovie(movie: any) {
    this.selectedMovieSource.next(movie);
  }
}

