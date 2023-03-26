import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { LoggedInUser } from '../logged-in-user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email = '';
    password = '';

    constructor(private http: HttpClient) { }

    onSubmit() {
        const data = { email: this.email, password: this.password };
        this.http.post<LoggedInUser>('http://localhost:3000/login', data, {
            //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe({
            next: (response: LoggedInUser) => {
                console.log(response)
                localStorage.setItem('token', response.accessToken);
            },
            error: (error: HttpErrorResponse) => {
                console.error('ERROR!!!', error);
            }
        });
    }
}