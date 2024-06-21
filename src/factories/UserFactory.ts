import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { Factory } from "./Factory";
import { User } from "../models/User";

// -----------------------------------------------------------------------------

export class UserFactory extends Factory<User> {
   protected generate() {
      return {
         firstName: faker.person.firstName(),
         lastName: faker.person.lastName(),
         password: bcrypt.hashSync("12345678", 10),
         email: faker.internet.email({ allowSpecialCharacters: true }),
         isActive: true,
      } as User;
   }
}
