// Este es el archivo número 15
//arrow functions 
const mozareaTriangulo = (mozbase, mozaltura) => {
    return (mozbase * mozaltura) / 2;
};

// Versión concisa (return implícito)
const mozareaTrianguloCorto = (mozbase, mozaltura) => (mozbase * mozaltura) / 2;

console.log("Área:", mozareaTriangulo(10, 5));
// Resultado: 25