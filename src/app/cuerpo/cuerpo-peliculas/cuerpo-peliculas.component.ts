
// src/app/cuerpo/cuerpo-peliculas/cuerpo-peliculas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../../services/tmdb.service';
import { SearchService } from '../../services/search.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-cuerpo-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuerpo-peliculas.component.html',
  styleUrls: ['./cuerpo-peliculas.component.css']
})
export class CuerpoPeliculasComponent implements OnInit {
  query: string = '';
  movies: any[] = [];

  constructor(
    private tmdbService: TmdbService, 
    private searchService: SearchService, 
    private navigationService: NavigationService
  ) {}
  
  ngOnInit() {
    this.loadPopularMovies();
    this.searchService.searchQuery$.subscribe(query => {
      this.query = query;
      this.search();
    });
  }

  search() {
    if (this.query) {
      this.tmdbService.searchMovies(this.query).subscribe(response => {
        this.movies = response.results;
      });
    }
  }

  loadPopularMovies() {
    this.tmdbService.getPopularMovies().subscribe(response => {
      this.movies = response.results.slice(0, 10); 
    });
  }

  onMovieClick(movie: any) {
    this.navigationService.selectMovie(movie);
    this.navigationService.selectCategory('videoPeliYoutube');
  }
}
