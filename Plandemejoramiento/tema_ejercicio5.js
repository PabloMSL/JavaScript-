// Este es el archivo número 5
const prompt = require('prompt-sync')();
//se declara la constante tasa_impuesto
const mozTASA_IMPUESTO = 0.15;

let mozprecioString = prompt("Ingrese el precio: ");
let mozprecio = Number(mozprecioString);

//Validacion
if (!isNaN(mozprecio)) {
    let mozimpuesto = mozprecio * mozTASA_IMPUESTO;
    let moztotal = mozprecio + mozimpuesto;
    
    console.log("Precio base: ", mozprecio);
    console.log("Impuesto (15%): ", mozimpuesto.toFixed(2));
    console.log("Total a pagar: ", moztotal.toFixed(2));
} else {
    console.log("Error: entrada invalida");
}
