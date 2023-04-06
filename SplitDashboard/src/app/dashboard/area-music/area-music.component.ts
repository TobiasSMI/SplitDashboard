import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-area-music',
  templateUrl: './area-music.component.html',
  styleUrls: ['./area-music.component.scss']
})
export class AreaMusicComponent implements OnInit {
  youtubeUrl: string = '';
  videoId: string = '';
  defaultPlaylistId: string = 'PLfuNlif8uy4OlCgAQYaMyAL1knKLgXnAp';
  sanitizedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.updateEmbedUrl();
  }

  onUrlChange() {
    const videoId = this.extractVideoId(this.youtubeUrl);
    this.videoId = videoId;
    this.updateEmbedUrl();
  }

  extractVideoId(url: string): string {
    const videoIdRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(videoIdRegExp);
    return match && match[2].length == 11 ? match[2] : '';
  }

  updateEmbedUrl() {
    const videoOrPlaylist = this.videoId
      ? `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
      : `https://www.youtube.com/embed?listType=playlist&list=${this.defaultPlaylistId}&autoplay=1`;

    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoOrPlaylist);
  }
}
