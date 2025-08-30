import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   menuOpen = false;

  constructor(private router: Router) { }

  goTo(page: string) {
    this.router.navigate([`${page}`]);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
