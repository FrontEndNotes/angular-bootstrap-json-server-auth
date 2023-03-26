import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "./auth.service";

export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    const router = inject(Router);
    const authService = inject(AuthService);

    return authService.isAuth$.pipe(
        map(() => true),
        catchError(() => {
            router.navigate(['/']);
            return of(false);
        })
    )

};