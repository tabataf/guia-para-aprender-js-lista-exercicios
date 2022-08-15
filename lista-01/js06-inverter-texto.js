/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

 var textoNormal = 'abacate'
 var textoInvertido = textoNormal.split("")
 var rev = textoInvertido.reverse()
 var result = rev.join('')
 console.log(result)