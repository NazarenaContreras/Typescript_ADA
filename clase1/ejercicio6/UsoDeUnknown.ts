// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. 
// Asigna diferentes tipos de valores a esta variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores.

let dato: unknown;

dato = "Texto";
if (typeof dato === "string") { 
    console.log("Es un string: ", dato.toUpperCase());
}

dato = 42;
if (typeof dato === "number") {
    console.log("Es un numero: ", dato + 8);
}

dato = true;
if (typeof dato === "boolean") {
    console.log("Es un boolenao: ", dato ? "Verdadero" : "Falso");
}

// Por qué usar unknown?
// Es el “tipo seguro” para cuando no sabés qué valor va a tener la variable.
// TypeScript exige una verificación antes de usarla, lo que previene errores en tiempo de compilación.
// Es ideal cuando recibís datos de una API, formularios o procesos externos cuya forma puede variar.
