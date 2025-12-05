// Este es el archivo número 16

// usando un if-else podemos elegir lo que pasa si, y de lo contrario
function mozesMayorDeEdad(mozedad) {
    if (mozedad >= 18) {
        return true;
    } else {
        return false;
    }
}

// Versión simplificada
function mozesMayorDeEdadSimple(mozedad) {
return mozedad >= 18;
}

console.log("Edad 20:", mozesMayorDeEdad(20)); // true
console.log("Edad 16:", mozesMayorDeEdad(16)); // false