import { AuthorFactory } from "./factories/AuthorFactory";
import { BookFactory } from "./factories/BookFactory";
import { UserFactory } from "./factories/UserFactory";

const userFactory = new UserFactory();
const authorFactory = new AuthorFactory();
const bookFactory = new BookFactory();

const users = userFactory.createMany(5);
const authors = authorFactory.createMany(5);
const books = bookFactory.createMany(5);

console.log("-----------------------------------");
console.log("Users");
console.log("-----------------------------------");
console.log(users);

console.log("-----------------------------------");
console.log("Authors");
console.log("-----------------------------------");
console.log(authors);

console.log("-----------------------------------");
console.log("Books");
console.log("-----------------------------------");
console.log(books);
