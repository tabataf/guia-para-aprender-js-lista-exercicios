/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1,2,3,4,5,6,7]
var impares = 0
    pares = 0
// processamento
for (i in entrada){
    if (i%2==0){
    pares += 1
} else{
    impares+= 1
}
}

//saida

console.log(`${impares} ${pares}`)

