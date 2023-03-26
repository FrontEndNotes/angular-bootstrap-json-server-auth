import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { User } from 'src/app/auth/logged-in-user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    users$ = this.http.get<User[]>('/users');

    constructor(private http: HttpClient) { }
}
