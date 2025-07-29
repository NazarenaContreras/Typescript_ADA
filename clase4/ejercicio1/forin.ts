let alumna = {
    nombre: "Naza",
    edad: "27",
    curso: "backend",
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}