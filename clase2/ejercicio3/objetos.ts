// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number). 
// Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. 
// Al final, muestra el estado del deportista en la consola.

type Deportista = {
    nombre: string;
    deporte: string;
    energia: number;
};

const deportista: Deportista = {
    nombre: "Marttein",
    deporte: "Padle",
    energia: 100,
};

function entrenar(persona: Deportista, horas: number): void {
    const energiaGastada = horas * 5;
    persona.energia -= energiaGastada;

    //para avitar que la energia sea negativa
    if(persona.energia < 0) {
        persona.energia = 0;
    }

    console.log(`${persona.nombre} entreno ${horas} hora(s). Energia restante: ${persona.energia}`);
}

entrenar(deportista, 3); // Marttein entreno 3 hora(s). Energia restante: 85
entrenar(deportista, 20); // energía no baja de 0