// Este es el archivo número 39
class mozGestionTareas {
    constructor() {
    this.tareas = [];
    }
    
    mozagregar(tarea) {
    this.tareas.push(tarea);
    console.log(`Tarea agregada: "${tarea}"`);
    }
    
    mozcompletar(indice) {
    if (indice >= 0 && indice < this.tareas.length) {
    this.tareas[indice] = "7 " + this.tareas[indice];
    console.log("Tarea marcada como completada");
    } else {
    console.log("Índice inválido");
    }
    }
    
    mozobtenerEstadisticas() {
    const total = this.tareas.length;
    const completadas = this.tareas.filter(
    t => t.startsWith("7")
    ).length;
    const pendientes = total - completadas;
    
    return { total, completadas, pendientes };
    }
    
    mozmostrar() {
    console.log("\n=== LISTA DE TAREAS ===");
    this.tareas.forEach((tarea, i) => {
    console.log(`${i}. ${tarea}`);
    });
    }
}
// Crear instancia
const misTareas = new mozGestionTareas();

// Agregar tareas
misTareas.mozagregar("Estudiar JavaScript");
misTareas.mozagregar("Hacer ejercicio");
misTareas.mozagregar("Preparar presentación");

// Mostrar todas
misTareas.mozmostrar();

// Completar primera tarea
misTareas.mozcompletar(0);

// Mostrar actualizado
misTareas.mozmostrar();

// Mostrar estadísticas
const stats = misTareas.mozobtenerEstadisticas();
console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${stats.total}`);
console.log(`Completadas: ${stats.completadas}`);
console.log(`Pendientes: ${stats.pendientes}`);