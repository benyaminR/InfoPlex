import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../blogs.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './blogs-list-card.component.html',
})
export class BlogsListCardComponent {

  @Input() blog!: Blog;
  @Input() index!: Number;

}
