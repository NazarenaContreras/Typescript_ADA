import { Person, createPerson } from "./types";

const persona: Person = createPerson('Nazarena', 27);

console.log(`Nombre: ${persona.name}, Edad: ${persona.age}`);
