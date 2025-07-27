// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. 
// Luego, llama a la función con varios números y muestra el resultado en la consola.

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, actual) => total + actual, 0);
}

const resultado = sumarTodos(3, 7, 12, 5, 8, 3);
console.log("Resultado de la suma:", resultado);

// Conceptos clave aplicados acá:
// ...numeros: Parametro rest que agrupa los argumentos en un array
// reduce: Metodo funcional para acumular valores
// Tipado en TypeScript para evitar errores con strings u otros tipos
