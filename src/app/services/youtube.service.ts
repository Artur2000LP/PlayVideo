// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class YoutubeService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  //private apiKey = 'AIzaSyCpxJuS48Q08WgCDI8CDuUDY2gCn-NVVYA';
  private apiKey = 'AIzaSyDrpcPpY7bw1TcJtkw1kuXCCgL8zTuMjhM';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  searchVideos(query: string): Observable<any> {
    const url = `${this.apiUrl}?part=snippet&q=${encodeURIComponent(query)}&key=${this.apiKey}&type=video&maxResults=1`;
    return this.http.get(url);
  }
}

