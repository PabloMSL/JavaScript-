// Este es el archivo número 8

//manipulacion de arrays
let mozpilaLibros = ["El Resplandor", "100 Años de Soledad", "El viaje al centro de la tierra"];

//se muestran los datos del array
console.log("Libros iniciales:", mozpilaLibros.length); // 3

// Agregar al final, con un push
mozpilaLibros.push("Las Mil y una noches");
console.log("Después de push:", mozpilaLibros.length); // 4
console.log("Libros:", mozpilaLibros);

// Remover del final con un pop
let mozlibroEliminado = mozpilaLibros.pop();
console.log("Libro removido:", mozlibroEliminado); // "Moby Dick"
console.log("Libros finales:", mozpilaLibros.length); // 3