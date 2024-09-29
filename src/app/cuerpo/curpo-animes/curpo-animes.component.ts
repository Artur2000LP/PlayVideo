
// src/app/cuerpo/cuerpo-animes/cuerpo-animes.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo-animes',
  standalone: true,
  templateUrl: './cuerpo-animes.component.html',
  styleUrl: './cuerpo-animes.component.css'
})
export class CuerpoAnimesComponent {
  animes = [
    { title: 'One Piece', poster_path: '/path_to_one_piece_poster' },
    // Add more anime data
  ];
}
