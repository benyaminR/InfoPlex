import { Injectable } from '@angular/core';



export interface Blog {
  author?: string;
  title: string;
  content: string;
  id?: number;
}



@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogs: Blog[] = [
    {
      title: 'Blog 1',
      content: 'Content of blog 1',
      author: 'Author 1',
      id: 1,
    },
    {
      title: 'Blog 2',
      content: 'Content of blog 2',
      author: 'Author 2',
      id: 2,
    },
    {
      title: 'Blog 3',
      content: 'Content of blog 3',
      author: 'Author 3',
      id: 3,
    },
  ];

  addBlog(author: string, title: string, content: string) {
    const id = this.blogs.length + 1;
    this.blogs.push({ author, title, content, id });
  }

  editBlog(id: number, author: string, title: string, content: string) {
    this.blogs[id - 1] = { author, title, content, id };
  }

  getBlog(id: number): Blog {
    return this.blogs.find(blog => blog.id === id) as Blog;
  }


}