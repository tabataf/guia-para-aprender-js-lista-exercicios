/**
 * Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
 * O usuário deve informar de qual numero ele deseja ver a tabuada. 
 * A saída deve ser conforme o exemplo abaixo: 
 * 
 * ENTRADA: 5
 * 
 * SAIDA
 * 5 X 1 = 5
 * 5 X 2 = 10
 *  ...
 * 5 X 10 = 50 
 * 
 * Se a entrada for fora de 1 e 10, podemos imprimir: entrada inválida
 * gere um array com os valores da tabuada, separando assim os dados da exibição
 */

// Entrada
var entrada = 18
if (entrada>=10 || entrada<0){
    console.log("entrada inválida")
}
else {
    for (var i=1; i < 11; i++) { 
    console.log(`${entrada} x ${i} = ${entrada * i}`)
}
}
var tabuada 

console.log(tabuada)
