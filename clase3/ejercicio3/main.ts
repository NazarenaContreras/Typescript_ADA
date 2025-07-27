import createUser from "./user";

const usuario = createUser("Nazarena", 27);

console.log("Usuario creado: ");
console.log("Nombre: ", usuario.name);
console.log("Edad: ", usuario.age);