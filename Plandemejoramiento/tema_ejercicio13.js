let mozpreciosBase = [100, 250, 399, 75];

//.map() transforma todos los elementos y los guarda en un nuevo array
let mozpreciosConAumento = mozpreciosBase.map(precio => precio * 1.10);

console.log("Originales:", mozpreciosBase);
console.log("Con 10% aumento:", mozpreciosConAumento);
// [110, 275, 438.9, 82.5]