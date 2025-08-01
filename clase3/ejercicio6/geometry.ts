// Uso de Namespaces
// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga las siguientes funciones:
// • areaOfCircle(radius: number): number: devuelve el área de un círculo.
// • areaOfSquare(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar a las funciones y muestra los resultados en la consola.

export namespace Geometry {
    export function areaOfCircle(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function areaOfSquare(side: number): number {
        return side * side;
    }
}

// usamos export namespace Geometry para definir el grupo, y export dentro para que las funciones esten disponibles fuera del archivo.