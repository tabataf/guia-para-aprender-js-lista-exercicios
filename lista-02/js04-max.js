/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */

// Entrada
// reduce = executa cada elemento de uma array 

// var entrada = [1,1,40]
// const maxValue = entrada.reduce(function(prev, current) { 
// 	return prev > current ? prev : current; 
// });


// console.log(maxValue)

var entrada = [1,1,40]
maior=0
for(n of entrada) {
    if ( n > maior) {
        maior = n 
    }
}
console.log(maior)