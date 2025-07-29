// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y Aserciones
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de valores mixtos 
// (por ejemplo, number | string | boolean). 
// Usando un bucle for...of, filtra solo los valores que sean cadenas de texto (string). 
// Utiliza aserciones de tipo para acceder a las propiedades específicas de string.

function filtrarElementos<T>(valores: T[]): string[] {
    const resultado: string[] = [];

    for(const valor of valores) {
        if (typeof valor === "string") {
            const texto = valor as string;
            console.log(`Texto encontrado: "${texto}", longitud: ${texto.length}`);
            resultado.push(texto);
        }
    }

    return resultado;
}

const mezcla = [42, "Hola", true, "Typescript", false, "ADA ITW"];
const soloStrings = filtrarElementos(mezcla);

console.log("Strings filtrados:", soloStrings);

// Que hicimos?
// Usamos una funcion generica filtrarElementos<T> para aceptar cualquier tipo.
// Dentro del for...of, usamos typeof para verificar si el valor es un string.
// Aplicamos una asercion de tipo con as string para acceder a .length sin perder seguridad de tipos.
// Al final, retornamos un arreglo con solo los elementos de tipo string.