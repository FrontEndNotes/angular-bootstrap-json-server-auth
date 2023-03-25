import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$ = this.http.get<any>('http://localhost:3000/users');
  posts$ = this.http.get<any>('http://localhost:3000/posts');

  constructor(private http: HttpClient) {}
}
