// Este es el archivo número 37
import fs from 'fs';

function mozactualizarContenido(nuevoContenido) {
fs.writeFile('log.txt', nuevoContenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo actualizado (UPDATE)");
});
}

const mozcontenidoActualizado ="Registro actualizado: " +new Date().toLocaleString() + "\n";

mozactualizarContenido(mozcontenidoActualizado);