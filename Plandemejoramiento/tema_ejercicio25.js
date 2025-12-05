// Este es el archivo número 25

class mozDireccion {
    constructor(calle, codigoPostal) {
    this.calle = calle;
    this.codigoPostal = codigoPostal;
    }
}
    
class mozCliente {
    constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    }
    
    mozmostrarUbicacion() {
    console.log(`${this.nombre} vive en:
    ${this.direccion.calle},
    CP ${this.direccion.codigoPostal}`);
    }
}
    
const miDireccion = new mozDireccion("Avenida Central 456", "10101");
const juan = new mozCliente("Juan Pérez", miDireccion);
juan.mozmostrarUbicacion();