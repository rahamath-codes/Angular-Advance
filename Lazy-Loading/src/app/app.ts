import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lazy-Loading';
}
