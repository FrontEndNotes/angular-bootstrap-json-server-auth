export interface LoggedInUser {
    accessToken: string;
    user: User;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    category: string;
    publicationDate: string;
    images: string[];
}

export interface User {
    id: number;
    fullName: string;
    birthDate: string;
    avatar: string;
    email: string;
    username: string;
    password: string;
    passwordText: string;
    bio: string;
}

export interface LoggedInUserToken {
    email: string;
    iat: number;
    exp: number;
    sub: string;
}