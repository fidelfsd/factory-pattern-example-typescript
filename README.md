# Basic Factory Pattern Example in TypeScript

This project demonstrates using the Factory design pattern to generate instances of various objects in TypeScript. The abstract `Factory` class serves as the base for specific factories (`AuthorFactory`, `BookFactory`, and `UserFactory`). The `@faker-js/faker` library generates realistic mock data.

## Description

The code illustrates the Factory pattern, dynamically creating instances of `Author`, `Book`, and `User` with mock data. Each specific factory extends the base `Factory<T>` class and implements the `generate()` method.

### Classes

1. **Factory<T>**: Abstract base class.
   - Methods: `createMany(count: number)`, `createOne()`.
   
2. **AuthorFactory**:
   - Generates `Author` instances with fake name and nationality.
   - Uses `@faker-js/faker`.

3. **BookFactory**:
   - Generates `Book` instances with fake title and genre.
   - Uses `@faker-js/faker`.

4. **UserFactory**:
   - Generates `User` instances with fake name, email, and hashed password.
   - Uses `@faker-js/faker` and `bcrypt`.
  

## How to Use


To start the project, execute the following command:

```sh
npm run dev
```

### Example Usage

```typescript
import { AuthorFactory } from "./factories/AuthorFactory";
import { BookFactory } from "./factories/BookFactory";
import { UserFactory } from "./factories/UserFactory";

const userFactory = new UserFactory();
const authorFactory = new AuthorFactory();
const bookFactory = new BookFactory();

const users = userFactory.createMany(5);
const authors = authorFactory.createMany(5);
const books = bookFactory.createMany(5);

console.log(users);
console.log(authors);
console.log(books);
```