/**
 * Faça um Programa que peça a temperatura em Fahrenheit, 
 * transforme e mostre graus Celsius. 
 * 
 * ENTRADA              SAÍDA
 * 102                  39
 * 89                   32
 * 70                   21
 */

 var tempFahrenheit = 89
 var tempCelcius = (tempFahrenheit - 32) * 5/9 
 var arredondar = tempCelcius.toFixed(0)
 var result= `A temperatura ${tempFahrenheit} equivale a ${arredondar} graus Celcius`
 console.log(result)