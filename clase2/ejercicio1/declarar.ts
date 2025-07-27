// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, ambos de tipo number, y retorne el producto de ambos números. 
// Luego, muestra el resultado en consola llamando a la función.

function multiplicarNumeros(a: number, b: number): number {
    return a * b;
}

let resultado = multiplicarNumeros(6, 7);
console.log("El producto es: ", resultado);

// Que conceptos practicamos acá?
// Declaracion de funciones con parametros tipados.
// Buenas practicas de tipado explicito (: number).
// Retorno de valores y uso de console.log().
