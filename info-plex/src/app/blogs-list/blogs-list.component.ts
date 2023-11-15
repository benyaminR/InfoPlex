import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListCardComponent } from '../blogs-list-card/blogs-list-card.component';
import { BlogsService } from '../blogs.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [CommonModule, BlogsListCardComponent, RouterLink, RouterOutlet],
  templateUrl: './blogs-list.component.html',
})
export class BlogsListComponent {
  constructor(readonly blogsService: BlogsService) {

  }

  ngOnInit(): void {
  }
}
