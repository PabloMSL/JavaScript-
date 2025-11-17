// Este es el archivo número 35
import fs from 'fs';

const moznuevaLinea = "--- Nueva entrada: Verificación OK\n";

fs.appendFile('log.txt', moznuevaLinea, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Dato agregado (APPEND)");
});