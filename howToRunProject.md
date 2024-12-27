# rakendus

## Project setup
Installing Node.js dependencies
```
npm install
```

Installing Nodemon global if you dont have it.
```
npm install -g nodemon
```

#### Connect a working database

Have a running PostgreSQL server, download [it](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) and set it up if you dont.

Check .env file in the src folder to modify it to your running server.
```
JWT_SECRET=supersecuresecretkey12345
DB_USER=postgres
DB_PASSWORD=YOUR-ADMIN-PASSWORD
DB_HOST=localhost
DB_DATABASE=YOUR-DATABASE-NAME
DB_PORT=YOUR-ACTIVE-LISTENING-PORT(usually 5432)

```

Create tables:
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

You can check in Postman if your backend is connected to the database.
```
GET http://localhost:5000/api/auth/signup
body(raw): 
{
  "email": "test@example.com",
  "password": "Password_123"
}

```

You can also check if the user was successfully added to database in you pgAdmin
```
SELECT * FROM users;
```

### Starting frontend and backend
Run frontend:
```
npm run serve
```


Run backend in second terminal:
```
npx nodemon server.js
```
Open website!

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
