// Este es el archivo número 23
class mozAuto {
    constructor(marca, velocidadInicial) {
    this.marca = marca;
    this._mozvelocidad = velocidadInicial;
    }
    

    // un setter valida un dato para prevenir posibles errores
    set mozvelocidad(valor) {
    if (valor >= 0) {
    this._mozvelocidad = valor;
    } else {
    console.log("Error: Velocidad no puede ser negativa");
    }
    }
    
    // un get permite llamar el valor usando la misma funcion
    get mozvelocidad() {
    return this._mozvelocidad;
    }
}
    
const carro = new mozAuto("Ford", 80);
console.log("Velocidad:", carro.mozvelocidad); // Usa getter
carro.mozvelocidad = 120; // Usa setter
carro.mozvelocidad = -50; // Intento fallido, muestra error