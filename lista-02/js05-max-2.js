/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [40,42,1,0,-10]
var segundoMaior = 40

maior=0
for(n of entrada) {
    if ( n > maior) {
        maior = n 
    }
}

segundoMaior= 0
for (m of entrada){
    if (m < maior && m > segundoMaior)
    segundoMaior= m
}
console.log("o maior númeor é", maior)
console.log("Já o segundo maior númeor é", segundoMaior)
