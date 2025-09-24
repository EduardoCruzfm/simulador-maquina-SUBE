import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-selector',
  standalone: true,
  imports: [],
  templateUrl: './branch-selector.component.html',
  styleUrl: './branch-selector.component.css'
})
export class BranchSelectorComponent {

  constructor(private router: Router) {}

   goToSimulator(ramalId: number) {
    this.router.navigate(['/sube', ramalId]);
  }

  goBack() {
    window.history.back();
  }
}
