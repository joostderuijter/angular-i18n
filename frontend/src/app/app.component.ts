import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bananaTranslation: string = $localize `:@@banana.translation:`;
  appleTranslation: string = $localize `:@@apple.translation:`;
  melonTranslation: string = $localize `:@@melonTranslation:`;

  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
