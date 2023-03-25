import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items$ = this.http.get<any>('http://localhost:3000/users')

  constructor(private http: HttpClient) {}
}
