// Este es el archivo número 41
export class mozEstudiante {
    constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
    }
    
    mozpromedio() {
    const suma = this.calificaciones.reduce(
    (acc, cal) => acc + cal, 0
    );
    return (suma / this.calificaciones.length).toFixed(2);
    }
}
    
export class mozRegistroEstudiantes {
    constructor() {
    this.estudiantes = [];
    }
    
    mozagregar(estudiante) {
    this.estudiantes.push(estudiante);
    }
    
    mozbuscar(nombre) {
    return this.estudiantes.find(e => e.nombre === nombre);
    }
    
    mozpromedioGeneral() {
    const promedios = this.estudiantes.map(e =>
    parseFloat(e.promedio())
    );
    const suma = promedios.reduce((a, b) => a + b, 0);
    return (suma / promedios.length).toFixed(2);
    }
    
    aJSON() {
    return JSON.stringify(this.estudiantes, null, 2);
    }
}