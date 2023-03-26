# Angular 15.2.4 and Bootstrap 5.2.3 Project with Local API using json-server, json-server-auth and bcryptjs

This is a project built with Angular 15.2.4 and Bootstrap 5.2 that uses a local API built with json-server, json-server-auth and bcrypt to hash passwords. The API stores users and their posts, and is accessible at http://localhost:3000. The application is accessible at http://localhost:4200.

## Installation

1. Clone this repository.
1. Install dependencies with npm install.

## Usage

### Scripts

The following scripts are available in package.json:

- `start`: Starts the Angular development server.
- `build`: Builds the Angular project.
- `watch`: Builds the Angular project and watches for changes in development mode.
- `generate-db`: Generates a new `db.json` file with sample data.
- `new-db`: Generates a new `db.json` file with sample data and starts the `json-server` with `json-server-auth`.
- `db`: Starts the json-server with `json-server-auth`.
- `new-all`: Concurrently runs npm run `new-db`and `ng serve`.
- `all`: Concurrently runs npm run db and `ng serve`.

## Running the Application

1. Run npm run new-all to start the json-server and the Angular development server.
1. Navigate to http://localhost:4200 in your browser to view the application.
1. Navigate to http://localhost:3000 in your browser to view the API.

API Documentation
The API has the following endpoints:

- GET `/users:` Returns a list of all users.
- GET `/users/:id`: Returns the user with the given id.
- POST `/users`: Adds a new user.
- PUT `/users/:id`: Updates the user with the given id.
- DELETE `/users/`:id: Deletes the user with the given id.
- GET `/posts`: Returns a list of all posts.
- GET `/posts/:id`: Returns the post with the given id.
- POST `/posts`: Adds a new post.
- PUT `/posts/:id`: Updates the post with the given id.
- DELETE `/posts/:id`: Deletes the post with the given id.

- POST `/login`: Authenticates a user and returns a JWT token.
- POST `/logout`: Logs out the currently authenticated user and invalidates their token.

The `/login` endpoint expects a request body with the following JSON data:

```json
{
  "email": "myemail",
  "password": "mypassword"
}
```

If the username and password match a user in the database, a JWT token will be returned in the following format:

```json
{
  "token": "myjwttoken"
}
```

This token should be included in the `Authorization` header of subsequent requests in the format `Bearer myjwttoken`.

The `/logout` endpoint does not expect any request body or query parameters. It will invalidate the current JWT token for the authenticated user.

All other endpoints require a valid JWT token in the `Authorization` header in order to access them. If a token is not provided or is invalid, a `401 Unauthorized` error will be returned.

## Dependencies

This project uses the following dependencies:

### [json-server](https://www.npmjs.com/package/json-server)

json-server is a lightweight package that allows you to create a RESTful API with a JSON file as your database. It is very easy to use and perfect for small projects or prototypes.

### [json-server-auth](https://www.npmjs.com/package/json-server-auth)

json-server-auth is an extension for json-server that provides basic authentication functionality, allowing you to create a secure API with user registration and login features.

### [bcryptjs](https://www.npmjs.com/package/bcryptjs)

bcryptjs is a library for hashing passwords using the bcrypt algorithm. It provides a secure way to store user passwords by generating a salted hash that is difficult to reverse engineer.

## Security

The passwords of the users are hashed using `bcrypt`. This ensures that the passwords are not stored in plain text in the database and are secure against brute-force attacks.

The API also uses `json-server-auth` to handle authentication. This means that only authenticated users can perform certain actions, such as creating new users or updating posts.

## Development

To generate new sample data for the API, run `npm run generate-db`. This will generate a new `db.json` file with sample data for users and posts.

To watch for changes in the Angular project in development mode, run `npm run watch`.

## Production

To build the Angular project for production, run `npm run build`. The built files will be stored in the `dist/` directory.

## Credits

This project was created by Ricardo (https://github.com/FrontEndNotes/)
