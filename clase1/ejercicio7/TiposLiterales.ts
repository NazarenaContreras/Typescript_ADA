// Ejercicio 7: Tipos literales
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". 
// Intenta asignar otros valores y observa el error en TypeScript.

type DiaLaboral = "Lunes" | "Martes" | "Miercoles";

let diaDeReunion: DiaLaboral = "Lunes"; // es valido
console.log("La reuniom sera el dia: ", diaDeReunion);

diaDeReunion = "Viernes"; // error: Type '"Viernes"' is not assignable to type 'DiaLaboral'

// Por qué esto es útil?
// Garatiza ue la variable solo tenga valores especificos, evitando datos erroneos.
// Es genial para validaciones, configuraciones o cuando trabajas con estados definidos como "activo" | "inactivo".
