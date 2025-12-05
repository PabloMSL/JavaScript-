// Este es el archivo número 38
import fs from 'fs';

const mozarchivo = "temporal.txt";

if (fs.existsSync(mozarchivo)) {
try {
fs.unlinkSync(mozarchivo);
console.log(`Archivo '${mozarchivo}' eliminado exitosamente`);
} catch (err) {
console.error("Error al eliminar:", err);
}
} else {
console.log(`El archivo '${mozarchivo}' no existe`);
}