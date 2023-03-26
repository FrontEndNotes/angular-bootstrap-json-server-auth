import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent {
    posts$ = this.http.get<any>('http://localhost:3000/posts');

    constructor(private http: HttpClient) { }
}
