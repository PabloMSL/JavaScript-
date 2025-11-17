// Este es el archivo número 22

class mozAuto {
    constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    }
    
    static mozinformacionGeneral() {
    return "Clase base para gestión de vehículos";
    }
}
    
// Llamada desde la clase
console.log(mozAuto.mozinformacionGeneral());
    
 // ERROR: No funciona desde instancias, ya  que como tal no esta llamando nada
const carro = new  mozAuto("Ford", "Focus");
 // carro.mozinformacionGeneral(); // Error