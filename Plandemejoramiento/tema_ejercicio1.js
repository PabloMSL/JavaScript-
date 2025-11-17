const  prompt = require('prompt-sync')(); //libreria necesaria para el prompt

//  Se solicitan los numeros
let mozucanumero1 = prompt("Ingrese el primer numero:");
let mozucanumero2 = prompt("Ingrese el segundo numero: ");

//se convierte a enteros

let moznum1 = parseInt(mozucanumero1);
let moznum2 = parseInt(mozucanumero2);

//se suma

let sumamoznum = moznum1 + moznum2;

//se muestra el resultado
alert("La suma es: " + sumamoznum);


