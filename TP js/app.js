//1-Suma de Números Pares: Crea un programa que sume todos los números pares en un array javascript
var array = [1,2,3,4,5,6,7,8,9,10]
var sum  = 0;
var aux = 0;

for(var i=0;i<array.length;i++){
if(array[i] %2 == 0 ){
sum += sum + array[i];
}else{
}
}
console.log(`la suma de todos los numero es:  ${sum} `);


//2 Factorial de un Número: Escribe una función que calcule el factorial de un número utilizando un bucle. utilizando un bucle.


    function factorial(numero) {
        if (numero < 0) {
            return "esto es un numero negativo ";
        } else if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let resultado = 1;
            for (var i = 2; i <= numero; i++) {
                resultado *= i;
            }
            return resultado;
        }
    }

var numero = 5; 
var resultado = factorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
//3 filtrar Números Primos: Crea una función que reciba un array de números y devuelva un nuevo array que contenga solo los números primos.


function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return numero > 1;
}

function arrayordenada(array) {
    return array.filter(numero => esPrimo(numero));
}

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primos = arrayordenada(numeros);
console.log(`los numeros divisible en primos:  ${primos} `);
//4 sCálculo de Promedio: Crea una función que calcule el promedio de los elementos en un array
function calcularPromedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
var numeros2 = [1, 2, 3, 4, 5];
var promedio = calcularPromedio(numeros2);
console.log(`El promedio es: ${promedio}`);
//5  -Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.

function eliminarDuplicados(array) {
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice);
}

var array3 = [1, 2, 3, 2, 4, 3, 5,1];
var sinDuplicados = eliminarDuplicados(array3);
console.log(`elimina el elemento duplicado del array: ${sinDuplicados}`);
//6 -Ordenar un Array de Objetos: Crea una función que ordene un array de objetos por un campo específico dentro de los objetos.
function ordenarPorCampo(array, campo) {
    return array.slice().sort((a, b) => (a[campo] > b[campo]) ? 1 : ((b[campo] > a[campo]) ? -1 : 0));
}

var personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

var personasOrdenadasPorEdad = ordenarPorCampo(personas, 'edad');

console.log(personasOrdenadasPorEdad);