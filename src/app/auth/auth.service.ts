import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LoggedInUser, LoggedInUserToken, User } from './logged-in-user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000';
    private jwtHelper = new JwtHelperService();

    private isAuth = new BehaviorSubject<boolean>(!!this.getToken());
    public isAuth$ = this.isAuth.asObservable();

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<boolean | string> {
        return this.http.post<LoggedInUser>(`${this.apiUrl}/login`, { email, password }).pipe(
            map(response => {
                console.log(response)
                const token = response.accessToken;

                if (token) {
                    console.log(token)
                    console.log(this.jwtHelper.getTokenExpirationDate(token)); // 1 hour

                    localStorage.setItem('token', token);
                    this.isAuth.next(true);
                    return true;
                }

                return false;
            }),
            catchError((error: HttpErrorResponse) => of(error.error || error.message)),
            shareReplay()
        );
    }

    logout(): void {
        localStorage.removeItem('token');
        this.isAuth.next(false);
    }

    getLoggedInUserEmail(): string | null {
        const token = this.getToken();

        if (!token) {
            return null;
        }
        console.log(this.jwtHelper.decodeToken(token), (<LoggedInUserToken>this.jwtHelper.decodeToken(token)).email)
        return (<LoggedInUserToken>this.jwtHelper.decodeToken(token)).email;
    }

    private getToken(): string {
        return localStorage.getItem('token') ?? '';
    }

    private isLoggedIn(): boolean {
        const token = this.getToken();
        return !this.jwtHelper.isTokenExpired(token);
    }
}
