import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hooks } from './hooks/hooks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hooks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Life-Cycle-Hooks';
}
