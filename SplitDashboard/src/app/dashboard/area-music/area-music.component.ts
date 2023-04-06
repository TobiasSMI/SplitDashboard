import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-area-music',
  templateUrl: './area-music.component.html',
  styleUrls: ['./area-music.component.scss']
})
export class AreaMusicComponent implements OnInit {
  videoUrl: string = 'https://www.youtube.com/embed/videoseries?list=PLfuNlif8uy4OlCgAQYaMyAL1knKLgXnAp';
  sanitizedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit(): void {}
}
