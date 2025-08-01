import createMultiplier from "./higherOrderFunctions";}

const multiplicarPorDos = createMultiplier(2);
const resultado = multiplicarPorDos(7);

console.log(`Resultado de multiplicar por 2: ${resultado}`);
