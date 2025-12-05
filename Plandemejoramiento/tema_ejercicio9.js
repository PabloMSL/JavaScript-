// Este es el archivo número 9

//bucle for
function mozsumarArreglo(mozarr) {
let mozsuma = 0;
// con el for se suman los arreglos en ventas
for (let i = 0; i < mozarr.length; i++) {mozsuma += mozarr[i];}
return mozsuma;
}
let mozventas = [100, 200, 300, 400, 500];
console.log("Total:", mozsumarArreglo(mozventas));
// Salida: 1500