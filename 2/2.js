// 2. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]

let arreglo=[ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ];

// a) Usar tres índices para leer e imprimir el elemento ?
console.log(arreglo[1][0][3]);

// b) Usar tres índices para leer e imprimir el elemento 66
console.log(arreglo[2][0][2]);

// c) Usar tres índices para leer e imprimir el elemento true
console.log(arreglo[0][0][2]);

// d) Usar tres índices para leer e imprimir el elemento %
console.log(arreglo[0][0][0]);

// Complete sin usar el intérprete de Javascript(úselo al final para verificar sus respuestas):
// e) arreglo[0][0][2] devolverá true
// f) arreglo[2][0][0] devolverá 44
// g) arreglo[1][0][3] devolverá ?
// h) arreglo[0][1][1] devolverá error ya que no se encuentra el segundo arreglo [1]
