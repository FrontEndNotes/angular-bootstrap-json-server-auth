import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivateGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PostsComponent } from './posts/posts/posts.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [canActivateGuard] },
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
