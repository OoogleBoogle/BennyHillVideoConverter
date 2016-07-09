import { Component } from '@angular/core';
import { VideoPlayerComponent, SearchPageComponent } from './shared';
import { HTTP_PROVIDERS } from '@angular/http';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VideoPlayerComponent, SearchPageComponent],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'Benny Hill Video Converter';
}
