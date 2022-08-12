/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

 var tempFahrenheit = 89
 var tempCelcius = (tempFahrenheit - 32) * 5/9 
 var arredondar = tempCelcius.toFixed(0)
 var result= `A temperatura ${tempFahrenheit} equivale a ${arredondar} graus Celcius`
 console.log(result)