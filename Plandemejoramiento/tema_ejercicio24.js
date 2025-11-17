// Este es el archivo número 24

//este es el metodo ssingleton 
class mozBaseDeDatos {
    constructor(url) {
    if (mozBaseDeDatos.instancia) {
    return mozBaseDeDatos.instancia;
    }
    
    this.url = url;
    this.conectado = true;
    mozBaseDeDatos.instancia = this;
    }
}
    
const mozdb1 = new mozBaseDeDatos("servidor_prod");
const mozdb2 = new mozBaseDeDatos("servidor_test");
    
console.log("URL db1:", mozdb1.url); // "servidor_prod"
console.log("URL db2:", mozdb2.url); // "servidor_prod"
console.log("¿Misma instancia?", mozdb1 === mozdb2); // true