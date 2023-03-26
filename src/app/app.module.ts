import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PostsComponent } from './posts/posts/posts.component';
import { UsersComponent } from './users/users/users.component';
import { DomainUrlInterceptor } from './services/domain-url.interceptor';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        PostsComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: DomainUrlInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
