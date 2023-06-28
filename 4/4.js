// 4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

let arreglo= [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

// a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
arreglo[1][1]="?";
console.log(arreglo[1][1]);

// b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
arreglo[3][1]="9";
console.log(arreglo[3][1]);

// c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
arreglo[0][0]="¡";
console.log(arreglo[0][0]);

// d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
//.splice(2, 1)  -> el primer valor es el indice y el segundo es la cantidad que se va eliminar
arreglo[1].splice(2, 1);
console.log(arreglo);

// e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
arreglo[0].splice(2, 1);
console.log(arreglo);

// f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
arreglo[3].splice(2, 1);
console.log(arreglo);

