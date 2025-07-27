import { capitalize, reverse } from "./stringUtils";

const textoOriginal: string = "typescript";
const textoCapitalizado = capitalize(textoOriginal);
const textoInvertido = reverse(textoOriginal);

console.log("Texto original: ", textoOriginal);
console.log("Texto con la primera letra en mayuscula: ", textoCapitalizado);
console.log("Texto invertido: ", textoInvertido);
