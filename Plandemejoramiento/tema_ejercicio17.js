// Este es el archivo número 17

//Son elifs para no acabar la cadena de if
function mozclasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Pruebas
console.log(mozclasificarTemperatura(25)); // "Temperatura baja"
console.log(mozclasificarTemperatura(50)); // "Temperatura adecuada"
console.log(mozclasificarTemperatura(85)); // "Temperatura alta"