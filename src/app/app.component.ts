import { Component } from '@angular/core';
import { SearchPageComponent } from './shared';
import { HTTP_PROVIDERS } from '@angular/http';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [SearchPageComponent],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {}
