import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Post } from 'src/app/auth/logged-in-user.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent {
    posts$ = this.http.get<Post[]>('/posts');

    constructor(private http: HttpClient) { }
}
