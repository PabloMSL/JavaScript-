// Este es el archivo número 14
let moztareas = [
"Hacer cama",
"Comprar pan",
"Estudiar JS",
"Lavar platos"
];

console.log("Inicial:", moztareas);

// splice(índice, cantidad_eliminar, nuevo_elemento), el splice modifica los arrays quitando un elemento a cambio de otro
tareas.splice(1, 1, "Pasear al perro");

console.log("Final:", moztareas);
// ["Hacer cama", "Pasear al perro",
// "Estudiar JS", "Lavar platos"]