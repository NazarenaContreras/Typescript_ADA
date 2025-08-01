import { sum, reverse } from './index';

const resultadoSuma = sum(5,3);
const textoInvertido = reverse('Marilina'); 

console.log(`Resultado de la suma: ${resultadoSuma}`);
console.log(`Texto invertido: ${textoInvertido}`);


// Esta tecnica de re-exportacion centraliza las utilidades, simplifica las importaciones, y te da un punto unico de entrada para los modulos. 
// Super util cuando escalamos a estructuras mas complejas.
