// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") 
// y luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). 
// La función debe retornar el área de la figura. 
// Usa tipos específicos para cada caso.

type Circulo = {
    tipo: "circulo";
    radio: number;
};

type Rectangulo = {
    tipo: "rectangulo";
    largo: number;
    ancho: number;
};

type Figura = Circulo | Rectangulo;

function calcularArea(figura: Figura): number {
    if (figura.tipo === "circulo") {
        return Math.PI * Math.pow(figura.radio, 2);
    } else if (figura.tipo === "rectangulo") {
        return figura.largo * figura.ancho;
    }
    throw new Error("Tipo de figura no reconocido");
}

const miCirculo: Circulo = { tipo: "circulo", radio: 5 };
const miRectangulo: Rectangulo = { tipo: "rectangulo", largo: 10, ancho: 4 };

console.log("Area del circulo:", calcularArea(miCirculo).toFixed(2));
console.log("Area del rectangulo:", calcularArea(miRectangulo));

// Practicando:
// Union de tipos con propiedades especificas (type Figura = Circulo | Rectangulo).
// Calculo condicional basado en el discriminante (tipo).
// Buenas practicas para escalar funciones segun estructuras de datos.