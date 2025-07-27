// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades nombre (string) y salario (number), y un número que represente el porcentaje de aumento. 
// La función debe aumentar el salario del empleado y devolver el nuevo salario. 
// Muestra en la consola el resultado.

type Empleado = {
    nombre: string;
    salario: number;
};

function aumentarSalario(empleado: Empleado, porcentaje: number): number {
    const aumento = empleado.salario *(porcentaje / 100);
    empleado.salario += aumento;
    return empleado.salario;
}

const empleado1: Empleado = { nombre: "Agnes", salario: 500000};

const nuevoSalario = aumentarSalario(empleado1, 20);

console.log(`El nuevo salario de ${empleado1.nombre} es: $${nuevoSalario}`);

// Practica de:
// Tipado personalizado con type
// Modificacion directa de propiedades de un objeto
// Operaciones matematicas con porcentajes
