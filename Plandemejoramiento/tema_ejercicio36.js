// Este es el archivo número 36
import fs from 'fs';

fs.readFile('log.txt', 'utf8', (err, data) => {
if (err) {
console.error("Error al leer:", err);
return;
}

console.log("=== Contenido de log.txt ===");
console.log(data);
console.log("============================");
});