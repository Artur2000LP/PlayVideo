import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-video-amateur',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule 
  ],
  templateUrl: './video-amateur.component.html',
  styleUrl: './video-amateur.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoAmateurComponent implements OnInit {
  videoTitle: string = '';
  videoFile: File | null = null;
  videos: { title: string, url: string }[] = [];

  ngOnInit(): void {
    this.loadVideos();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.videoFile = file;
    }
  }

  onSubmit(): void {
    if (this.videoTitle && this.videoFile) {
      const url = URL.createObjectURL(this.videoFile);
      this.videos.push({ title: this.videoTitle, url });
      this.saveVideos();
      this.videoTitle = '';
      this.videoFile = null;
    }
  }

  saveVideos(): void {
    localStorage.setItem('videos', JSON.stringify(this.videos));
  }

  loadVideos(): void {
    const savedVideos = localStorage.getItem('videos');
    if (savedVideos) {
      this.videos = JSON.parse(savedVideos);
    }
  }

  deleteVideo(index: number): void {
    this.videos.splice(index, 1);
    this.saveVideos(); // Guardar los cambios en el localStorage
  }
}
