// Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
// Consigna: Crea una función llamada crearPersona que acepte tres parámetros: nombre (string), edad (number), y pais (string). 
// La función debe devolver un objeto que tenga esas propiedades. 
// Luego, imprime el objeto retornado en la consola.

function crearPersona(nombre: string, edad: number, pais: string): { nombre: string; edad: number; pais: string } {
    return {
        nombre,
        edad,
        pais,
    };
}

const persona1 = crearPersona("Nazarena", 27, "Argentina");
const persona2 = crearPersona("Maddy", 30, "Maxico");

console.log("Persona 1:", persona1);
console.log("Persona 2:", persona2);

// poniendo en practica:
// Tipado fuerte en los parametros
// Retorno de objetos con estructura definida
// Modularizacion de logica para generacion de datos dinamicos