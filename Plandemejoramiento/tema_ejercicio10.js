// Este es el archivo número 10
let moztemperaturas = [15, 22, 33, 45, 68, 82, 91];

//se crea el nuevo array filtrando los  numeros mayores a 50
let moztemperaturasAltas = moztemperaturas.filter(temp => temp > 50);

console.log("Originales:", moztemperaturas);
console.log("Mayores a 50:", moztemperaturasAltas);
// Resultado: [68, 82, 91]