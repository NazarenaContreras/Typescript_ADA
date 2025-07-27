// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y encendido (booleano). 
// Define una función encenderCoche que acepte el objeto coche y cambie el valor de encendido a true. 
// Muestra el estado del coche en la consola antes y después de llamar a la función.

type Coche = {
    marca: string;
    modelo: string;
    encendido: boolean;
};

const coche: Coche = {
    marca: "Honda",
    modelo: "Fit",
    encendido: false,
};

function encenderCoche(c: Coche): void {
    c.encendido = true;
    console.log(`${c.marca} ${c.modelo} encendido: ${c.encendido}`);
}

console.log("Estado inicial:", coche);

encenderCoche(coche);

console.log("Estado Final:", coche);

// practicando:
// Uso del tipo void para funciones que no retornan valores.
// Manipulacion directa de objetos a traves de funciones.
// Seguimiento de estado antes y despues de una accion.
