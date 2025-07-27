// Ejercicio 5: Datos nulos y diferenciados
// Declara una variable de tipo string | null. 
// Asigna inicialmente un valor de cadena, y luego cambia su valor a null. 
// Imprime ambos estados en la consola, explicando el significado de null en TypeScript.

let mensaje: string | null = "Hola chicas!";
console.log("Estado inicial: ", mensaje);

mensaje = null;
console.log("Estado despues de asignar null: ", mensaje);

// Qué significa null en TypeScript?
// null representa la ausencia intencional de un valor. Es como decir “esta variable existe, pero ahora no tiene ningun dato util”.
// A diferencia de undefined, que suele indicar que algo aun no fue asignado, null se usa cuando decidis que el valor esta vacio.
// Usar string | null obliga a tu codigo a manejar ambos estados, lo que hace que sea mas robusto y claro al leer.
