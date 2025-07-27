//Ejercicio 9: Comparaciones lógicas
// Declara dos variables booleanas y realiza una comparación lógica (como AND, OR). 
// Imprime el resultado.

let esBackend: boolean = true;
let tieneExperiencia: boolean = false;

let puedeAplicar: boolean = esBackend && tieneExperiencia;
let nesecitaCapacitacion: boolean = esBackend || tieneExperiencia;

console.log("Puede aplciar directamente?: ", puedeAplicar);
console.log("Nesecita capacitacion previa?: ", !nesecitaCapacitacion);

// Que se esta evaluando?
// Con &&, ambas condiciones deben ser verdaderas.
// Con ||, basta con que una lo sea.
// Tambien se puede usar ! para negar una condición.
