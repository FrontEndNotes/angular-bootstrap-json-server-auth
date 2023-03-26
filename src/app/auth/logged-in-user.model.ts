export interface LoggedInUser {
    accessToken: string;
    user: User;
}

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    category: string;
    publicationDate: string;
    images: string[];
}

interface User {
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