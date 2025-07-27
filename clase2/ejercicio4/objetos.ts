// Ejercicio 4: Función que devuelve un objeto
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). 
// La función debe devolver un objeto con esas propiedades. 
// Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.

function crearLibro(titulo: string, autor: string, paginas: number): { titulo: string; autor: string; paginas: number } {
    return {
        titulo,
        autor,
        paginas,
    };
}

const libro1 = crearLibro("Codigos del Backend", "Ada Itw", 200);
const libro2 = crearLibro("Typescript para resilientes", "Lucy Patane", 168);

console.log("Libro 1: ", libro1);
console.log("Libro 2: ", libro2);

// Que conceptos reforzamos acá?
// Declaración de funciones con tipado explicito
// Retorno de objetos personalizados
// Reutilizacion de logica con multiples instancias

