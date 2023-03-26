import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isAuth$ = this.authService.isAuth$;
    userEmail = this.authService.getLoggedInUserEmail();

    constructor(private http: HttpClient, public authService: AuthService) { }
}
