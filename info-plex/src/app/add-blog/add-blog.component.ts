import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogsService } from '../blogs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
})
export class AddBlogComponent {

  applyForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl('')
  });

  addBlog() {
    this.blogsService.addBlog(
      this.applyForm.value.author ?? '',
      this.applyForm.value.title ?? '',
      this.applyForm.value.content ?? ''
    ).subscribe({
      next: (data) => {
        // Handle successful response
        // redirect to home page
        this.router.navigate(['/']);
      },
      error: (error) => {
        // Handle error
        console.error('There was an error!', error);
      }
    });

  }

  constructor(private router: Router, private blogsService: BlogsService) {

  }

  ngOnInit(): void {
  }

}
