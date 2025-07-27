// Ejercicio 4: Parametros opcionales simulados
// Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. 
// Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". 
// Si se asigna la edad, imprímela junto al nombre.

let nombre: string = "Nazarena";
let edad: number | undefined = undefined; // edad es opcional

if (edad === undefined) {
    console.log(`${nombre}: Edad no proporcionada`);
} else {
    console.log(`${nombre}: ${edad} años`);
}

// Usamos number | undefined para que la variable edad pueda no tener valor.
// El condicional edad === undefined permite verificar si se asigno o no.