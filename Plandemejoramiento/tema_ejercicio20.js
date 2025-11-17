// Este es el archivo número 20
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