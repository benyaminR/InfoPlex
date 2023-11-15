import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogsService } from '../blogs.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-blog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-blog.component.html',
})
export class EditBlogComponent {

  id: number = -1;
  editForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl('')
  });

  editBlog() {
    this.blogsService.editBlog(
      this.id,
      this.editForm.value.author ?? '',
      this.editForm.value.title ?? '',
      this.editForm.value.content ?? ''
    );
    // redirect to home page
    this.router.navigate(['/blogs', this.id.toString()]);
  }

  constructor(private router: Router, private blogsService: BlogsService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('blogId'));
    var blog = this.blogsService.getBlog(this.id);
    this.editForm.setValue({ author: blog.author!, title: blog.title!, content: blog.content! });
  }

  ngOnInit(): void {
  }

}