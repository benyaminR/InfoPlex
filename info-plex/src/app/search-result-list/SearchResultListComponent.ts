import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      You searched for: {{searchTerm}}
    </p>
  `,
  styles: ``
})
export class SearchResultListComponent {

  searchTerm: string = '';


  constructor(private route: ActivatedRoute) {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm')!;
  }

}
