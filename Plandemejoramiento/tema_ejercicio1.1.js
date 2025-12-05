const prompt = require('prompt-sync')();

//version con validacion

let mozvalor1 = prompt("Ingrese primer valor: ");
let mozvalor2 = prompt("Ingrse segundo valor: ");

//conversion a decimal
let mv1 = parseInt(mozvalor1, 10);
let mv2 = parseint(mozvalor2, 10);

//verificar conversion
if (isNaN(mv1) || isNaN(mv2)) {
    alert("Por favor ingrese numeros validos");
} else {
    let mozresultado = mv1 + mv2;
    alert('El resultado de ${mv1} + ${mv2} = ${mozresultado}');
}