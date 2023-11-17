import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListCardComponent } from '../blogs-list-card/blogs-list-card.component';
import { Blog, BlogsService } from '../blogs.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [CommonModule, BlogsListCardComponent, RouterLink, RouterOutlet],
  templateUrl: './blogs-list.component.html',
})
export class BlogsListComponent implements OnInit {

  blogs!: Blog[];

  constructor(private blogsService: BlogsService) {

  }

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }
}
