// Este es el archivo número 40
class mozProducto {
    constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    }
    
    mozvalorTotal() {
    return this.precio * this.cantidad;
    }
    
    static mozcategoriaBase() {
    return "General";
    }
}
    
class mozProductoElectronico extends mozProducto {
    constructor(nombre, precio, cantidad, garantia) {
    super(nombre, precio, cantidad);
    this.garantiaMeses = garantia;
    this.categoria = "Electrónico";
    }
}
class mozProductoAlimenticio extends mozProducto {
    constructor(nombre, precio, cantidad, fecha) {
    super(nombre, precio, cantidad);
    this.fechaVencimiento = fecha;
    this.categoria = "Alimenticio";
    }
}
    
class mozInventario {
    constructor() {
    this.productos = [];
    }
    
    mozagregar(producto) {
    this.productos.push(producto);
    }
    
    mozbuscarPorCategoria(categoria) {
    return this.productos.filter(
    p => p.categoria === categoria
    );
    }
}
// Uso del sistema
const tienda = new mozInventario();

// Agregar productos electrónicos
tienda.mozagregar(new mozProductoElectronico("Laptop", 1200, 5, 24));
tienda.mozagregar(new mozProductoElectronico("Mouse", 25, 20, 12));

// Agregar productos alimenticios
tienda.mozagregar(new mozProductoAlimenticio("Leche", 3, 50, "2024-12-31"));
tienda.mozagregar(new mozProductoAlimenticio("Pan", 2, 30, "2024-12-15"));

// Buscar por categoría
const electronicos = tienda.mozbuscarPorCategoria("Electrónico");
console.log("\n=== PRODUCTOS ELECTRÓNICOS ===");
electronicos.forEach(p => {
console.log(`${p.nombre} - $${p.precio} - Stock: ${p.cantidad}`);
console.log(`Garantía: ${p.garantiaMeses} meses`);
console.log(`Valor total: $${p.valorTotal()}\n`);
});

// Calcular valor total del inventario
const valorTotal = tienda.productos.reduce(
(sum, p) => sum + p.valorTotal(), 0
);
console.log(`Valor total del inventario: $${valorTotal}`);