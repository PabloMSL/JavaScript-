// Este es el archivo número 6

//constantes 

const mozPI = 3.14159;
//mozPI = 3.14; // ERROR!!!!!!!!!!!!!

console.log(mozPI); // 2.14159

//Las constantes no se pueden reasignar despues de ser declaradas

let contador = 10;
contador = 20; //Valido

console.log(contador); //20

//las variables let si se pueden modificar

//ambito de bloque

{
    let moztemporal = 5;
    const mozfija = 10;
}
// ninguna se puede acceder