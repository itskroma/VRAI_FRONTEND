import { Component } from '@angular/core';
import { LivreService } from './services/livre-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT_PROJECT';
  backgroundImage = '/assets/bckg.png'; // provide an absolute path to the image file
}



