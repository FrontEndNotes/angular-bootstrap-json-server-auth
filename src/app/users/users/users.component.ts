import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    users$ = this.http.get<any>('http://localhost:3000/users');

    constructor(private http: HttpClient) { }
}
