import { Component, Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bananaTranslation: string = $localize `:@@banana.translation:`;
  appleTranslation: string = $localize `:@@apple.translation:`;
  melonTranslation: string = $localize `:@@melon.translation:`;

  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
