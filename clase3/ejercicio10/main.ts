import { add, multiply, toUpperCase, greet, createUser, User } from './utils/utils';

const suma = add(9, 13);
const producto = multiply(7, 8);
const saludo = greet('Agnes');
const nombreEnMayus = toUpperCase('typescript');
const usuario: User = createUser('Agnes', 29);

console.log('Suma:', suma);
console.log('Producto:', producto);
console.log('Saludo:', saludo);
console.log('Nombre en mayusculas:', nombreEnMayus);
console.log(`Usuario: ${usuario.name}, Edad: ${usuario.age}`);