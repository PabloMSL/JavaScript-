// Este es el archivo número 12
let mozcolaClientes = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", mozcolaClientes);

// Atender al primer cliente
let mozatendido = mozcolaClientes.shift();
console.log("Cliente atendido:", mozatendido);
console.log("Cola después de shift:", mozcolaClientes);

// Cliente prioritario al inicio
//unshift() añade elementos al inicio mientras que shift() elimina el  primero
mozcolaClientes.unshift("Cliente Prioritario");
console.log("Cola final:", mozcolaClientes);