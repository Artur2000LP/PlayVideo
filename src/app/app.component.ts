

// // src/app/app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarralateralComponent } from './menu/barralateral/barralateral.component';
import { BarramenuComponent } from './menu/barramenu/barramenu.component';
import { CuerpoPresentacionComponent } from './cuerpo/cuerpo-presentacion/cuerpo-presentacion.component';
import { TmdbService } from './services/tmdb.service';
import { CuerpoPeliculasComponent } from './cuerpo/cuerpo-peliculas/cuerpo-peliculas.component';
import { NavigationService } from './services/navigation.service';
import { AyudaComponent } from './opciones/ayuda/ayuda.component';
import { SugerenciasComponent } from './opciones/sugerencias/sugerencias.component';
import { VideoAmateurComponent } from './cuerpo/video-amateur/video-amateur.component';
import { VideoYouTubeComponent } from './cuerpo/video-you-tube/video-you-tube.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BarralateralComponent,
    BarramenuComponent,
    CuerpoPresentacionComponent,
    CuerpoPeliculasComponent,
    AyudaComponent,
    SugerenciasComponent,
    VideoAmateurComponent,
    VideoYouTubeComponent

  ],
  providers: [TmdbService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'playVideo';
  selectedCategory: string = 'cuerpo-presentacion';

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
    });
  }

}
