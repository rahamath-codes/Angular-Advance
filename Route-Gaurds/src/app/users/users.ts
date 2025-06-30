import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnDestroy,OnInit {
    userRole = 'user';
    ngOnDestroy(): void {
      console.log("Component Destroyed")
    }
    ngOnInit(): void {
      console.log("Component Initialized")
    }
}
