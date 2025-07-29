// Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length.

export let dato: any = "Typescript me encanta";

let longitud: number = (dato as string).length;
console.log(`La longitud del string es: ${longitud}`);



