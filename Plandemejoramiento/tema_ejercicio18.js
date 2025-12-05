// Este es el archivo número 18

// es una forma corta de hacer un if-else, debido a esto es usado para simplificar codigo
const mozverificarAcceso = (edad) => edad >= 18 ? "Permitido" : "Denegado";

console.log("17 años:", mozverificarAcceso(17));
// "Denegado"

console.log("35 años:",mozverificarAcceso(35));
// "Permitido"