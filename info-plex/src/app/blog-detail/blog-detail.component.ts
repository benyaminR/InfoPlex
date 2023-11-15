import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogsService, Blog } from '../blogs.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {


  route: ActivatedRoute = inject(ActivatedRoute);
  blogId: number = -1;
  blog!: Blog;

  constructor(private blogsService: BlogsService) {
    this.blogId = Number(this.route.snapshot.paramMap.get('blogId'));
    this.blog = this.blogsService.getBlog(this.blogId);
    console.log(this.blog);
  }
}
