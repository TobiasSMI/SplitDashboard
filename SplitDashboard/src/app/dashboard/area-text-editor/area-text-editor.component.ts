import { Component } from '@angular/core';
import * as showdown from 'showdown';

@Component({
  selector: 'app-area-text-editor',
  templateUrl: './area-text-editor.component.html',
  styleUrls: ['./area-text-editor.component.scss']
})

export class AreaTextEditorComponent {
  markdownContent: string = '';
  previewMode: boolean = false;
  converter = new showdown.Converter();
  previewHtml: string = '';

  togglePreview() {
    if (this.previewMode) {
      this.previewMode = false;
    } else {
      this.previewMode = true;
      this.previewHtml = this.converter.makeHtml(this.markdownContent);
    }
  }
}
