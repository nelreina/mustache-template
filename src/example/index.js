import { renderTemplate } from "../index.js";
import { faker } from "@faker-js/faker";

const data = { name: faker.name.fullName() };

const text = await renderTemplate("example/example", data);
console.log(text);
