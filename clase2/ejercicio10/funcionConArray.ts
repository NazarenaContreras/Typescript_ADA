// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos libro, donde cada libro tiene las propiedades titulo (string) y autor (string). 
// La función debe recorrer el array y mostrar los detalles de cada libro en la consola.

type Libro = {
    titulo: string;
    autor: string;
};

const biblioteca: Libro[] = [
    { titulo: "La mano izquierda de la oscuridad", autor: "Ursula K Le Guin" }, 
    { titulo: "Orgullo y Prejuicio", autor: "Jane Austen" },
    { titulo: "Sobre los huesos de los muertos", autor: "Olga Tokarczuk" },
];

function listarLibros(libros: Libro[]): void {
    console.log("Lista de libros:");
    libros.forEach((libro, index) => {
        console.log(`${index + 1}. "${libro.titulo}" por ${libro.autor}`);
    });
}

listarLibros(biblioteca);

// "Cada función cuenta, cada error enseña, y cada intento construye el camino."