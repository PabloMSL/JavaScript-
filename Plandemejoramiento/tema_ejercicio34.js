// Este es el archivo número 34
import fs from 'fs';

const mozfecha = new Date().toISOString();
const mozcontenido = `Log creado: ${mozfecha}\n`;

fs.writeFile('log.txt', mozcontenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo creado exitosamente (CREATE)");
});