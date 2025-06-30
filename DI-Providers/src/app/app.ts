import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Data } from './service/data';
import { ZoneDemo } from './zone-demo/zone-demo';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ZoneDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'DI-Providers';
  data!:string;
  constructor(private dataService:Data){
    this.data = this.dataService.getData()
  }

}
