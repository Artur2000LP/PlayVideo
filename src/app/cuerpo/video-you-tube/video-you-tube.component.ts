
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YouTubeService } from '../../services/youtube.service';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para usar ngModel

@Component({
  selector: 'app-video-you-tube',
  standalone: true, // Esto indica que el componente es standalone
  imports: [CommonModule, FormsModule], // Importa CommonModule y FormsModule
  templateUrl: './video-you-tube.component.html',
  styleUrls: ['./video-you-tube.component.css']

})
export class VideoYouTubeComponent implements OnInit {
  selectedMovie: any = null;
  videoUrl: SafeResourceUrl | null = null;
  comments = [
    { author: 'Juan Pérez', text: '¡Una película increíble! Las actuaciones y el guion me dejaron sin palabras.' },
    { author: 'María López', text: 'Un film espectacular. Me encantó la cinematografía y la dirección.' },
    { author: 'Carlos Gutiérrez', text: 'Sin duda, una de las mejores películas del año. Totalmente recomendada.' },
    { author: 'Ana Rodríguez', text: 'Impresionante. Una obra maestra en todos los sentidos. 10/10.' },
    { author: 'Luis García', text: 'Una película que te mantiene al borde del asiento. ¡Maravillosa!' }
  ];
  newCommentAuthor: string = '';
  newCommentText: string = '';

  constructor(
    private youtubeService: YouTubeService,
    private navigationService: NavigationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.navigationService.selectedMovie$.subscribe(movie => {
      this.selectedMovie = movie;
      if (this.selectedMovie) {
        this.searchAndSetVideoUrl(this.selectedMovie.title);
      }
    });
  }

  searchAndSetVideoUrl(query: string) {
    this.youtubeService.searchVideos(query).subscribe(response => {
      const videoId = response.items[0]?.id.videoId;
      if (videoId) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      }
    });
  }

  addComment() {
    if (this.newCommentAuthor.trim() && this.newCommentText.trim()) {
      this.comments.unshift({
        author: this.newCommentAuthor,
        text: this.newCommentText
      });
      this.newCommentAuthor = '';
      this.newCommentText = '';
    }
  }
}

