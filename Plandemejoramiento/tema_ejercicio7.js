// Este es el archivo número 7
//function se usa para guardar parte del codigo y luego ser llamado para simplificar el codigo
function mozverificarParImpar(moznumero) {
if (moznumero % 2 === 0) {
    console.log(moznumero + " es par");
} else {
    console.log(moznumero + " es impar");
}
}

// Pruebas
mozverificarParImpar(15); // "15 es impar"
mozverificarParImpar(20); // "20 es par"
mozverificarParImpar(0); // "0 es par"
mozverificarParImpar(-3); // "-3 es impar" 