import { Component } from '@angular/core';
import { VideoPlayerComponent } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VideoPlayerComponent]
})
export class AppComponent {
  title = 'app works!';
}
