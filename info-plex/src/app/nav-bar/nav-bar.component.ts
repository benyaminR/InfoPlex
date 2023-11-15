import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private router: Router) { }

  submitSearch() {
    this.router.navigate(['/search', { searchTerm: this.searchForm.value.search ?? '' }]);
  }

}
