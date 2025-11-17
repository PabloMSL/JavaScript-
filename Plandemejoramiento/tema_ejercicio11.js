// Este es el archivo número 11
let mozmatriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

function mozimprimirMatriz(mozarr) {
for (let i = 0; i < mozarr.length; i++) {
    for (let j = 0; j < mozarr[i].length; j++) {
        console.log(`[${i}][${j}] = ${mozarr[i][j]}`);
    }
  }
}

mozimprimirMatriz(mozmatriz);

//El anterior ejemplo es una matriz o un array de arrays, en el cual se guardan datos y se imprimen asi matriz[1][2] siendo 1 la fila y 2 la columna