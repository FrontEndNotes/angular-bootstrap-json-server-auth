import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate as canActivateFn } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [canActivateFn] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
