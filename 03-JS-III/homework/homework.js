// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma = 0 
    for (i = 0; i < 11; i++) {
    suma = suma + i
  }
  return suma
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var resultado = [];
  var i = 0;
  while (i < array.length) {
  if (array [i]  % 2 === 0)  
  resultado.push (array [i]); i++
  }
  return resultado
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map (function(num){
    return num ** 2
    });
  }

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce (function(acc,num){
    return acc + num ;
  });
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código: 
    return ( num.toString ().length); 
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
