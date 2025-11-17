// Este es el archivo número 21
class mozAuto {
    constructor(mozmarca, mozmodelo) {
        this.mozmarca = mozmarca;
        this.mozmodelo = mozmodelo;
    }

    mozobtenerDescripcion() {
        return `Marca: ${this.mozmarca}, Modelo: ${this.mozmodelo}`;
    }
}

const miAuto = new mozAuto("Toyota", "Corolla");
console.log(miAuto.mozobtenerDescripcion());
// "Marca: Toyota, Modelo: Corolla"

export default mozAuto;


// esta es una clase heredera, de la clase mozAuto, que aparte de las propiedades de la clase heredada tambien puede tener sus propias funciones a base de otra clase
class mozVehiculoElectrico extends mozAuto {
    constructor(marca, modelo, autonomia) {
    super(marca, modelo);
    this.autonomiaBateria = autonomia;
    }

    mozmostrarInfo() {
        return `${super.mozobtenerDescripcion()},
        Autonomía: ${this.autonomiaBateria} km`;
    }
}

const tesla = new mozVehiculoElectrico(
    "Tesla", "Model 3", 500
);
console.log(tesla.mozmostrarInfo());