// Ejercicio 2: Uso de funciones con parámetros opcionales
// Consigna: Define una función llamada saludar que acepte un parámetro nombre de tipo string y otro opcional saludo de tipo string. 
// Si el parámetro saludo no es proporcionado, la función debe usar "Hola" por defecto. 
// Retorna el saludo y muestra el resultado en la consola.

function saludar(nombre: string, saludo: string = "Hola"): string {
    const mensaje = `${saludo}, ${nombre}!`;
    console.log(mensaje)
    return mensaje;
}

saludar("Nazarena");
saludar("Nazarena", "Buen dia");

// Que aprendo acá?
// Parametros opcionales con valores por defecto (saludo = "Hola")
// Uso de string y template literals
// Buenas practicas para retornar y mostrar resultados