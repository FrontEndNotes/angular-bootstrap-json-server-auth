import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { LoggedInUser } from '../logged-in-user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email = 'Kraig5@hotmail.com';
    password = 'WWLxsYrv4dvebSJ';
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        const data = { email: this.email, password: this.password };

        this.authService.login(this.email, this.password).subscribe(result => {
            if (result === false) {
                this.errorMessage = 'Invalid email or password';
            } else if (typeof result === 'string') {
                this.errorMessage = result;
            } else {
                this.errorMessage = '';
                this.router.navigate(['/']);
            }
        });
    }
}