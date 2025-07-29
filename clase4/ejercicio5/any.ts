// Actividad 5: Usar aserciones dobles
// Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number. 
// Muestra el resultado.

export let dato: any = "123";

let numero: number = (dato as unknown as number);
console.log(`Numero convertido: ${numero}`);


