import { Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { SearchResultListComponent } from './search-result-list/SearchResultListComponent';


export const routes: Routes = [
    {
        path: '',
        component: BlogsListComponent,
        title: 'Home page'
    },

    {
        path: 'blogs/:blogId',
        component: BlogDetailComponent
    },
    {
        path: "blogs/:blogId/edit",
        component: EditBlogComponent
    },
    {
        path: 'add',
        component: AddBlogComponent
    }
    ,
    {
        path: 'search',
        component: SearchResultListComponent
    }
];
