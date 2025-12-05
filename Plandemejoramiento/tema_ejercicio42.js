// Este es el archivo número 42
import fs from 'fs';
import { mozEstudiante, mozRegistroEstudiantes } from './tema_ejercicio41';

const mozregistro = new mozRegistroEstudiantes();

// Agregar estudiantes
mozregistro.mozagregar(new mozEstudiante("Ana", [85, 90, 88]));
mozregistro.mozagregar(new mozEstudiante("Carlos", [78, 82, 80]));
mozregistro.mozagregar(new mozEstudiante("María", [92, 95, 91]));

// Mostrar promedio general
console.log("Promedio general del curso:",
mozregistro.mozpromedioGeneral());

// Guardar en archivo JSON
fs.writeFile(
'estudiantes.json',
mozregistro.aJSON(),
(err) => {
if (err) {
console.error("Error al guardar:", err);
return;
}
console.log("Datos guardados exitosamente en estudiantes.json");
}
);

// Cargar desde archivo (ejemplo)
fs.readFile('estudiantes.json', 'utf8', (err, data) => {
if (err) {
console.log("Archivo no existe aún");
return;
}

const datosEstudiantes = JSON.parse(data);
console.log("\nDatos cargados desde archivo:");
console.log(datosEstudiantes);
});