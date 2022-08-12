/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

 const numero = 5;
 if (numero >7 || numero <1) {
 console.log("Entrada inválida.");
 } else {
 switch (numero) {
 case 1:
 console.log("Domingo");
 break;
 case 2:
 console.log("Segunda-feira");
 break;
 case 3:
 console.log("Terça-feira");
 break;
 case 4:
 console.log("Quarta-feira");
 break;
 case 5:
 console.log("Quinta-feira");
 break;
 case 6:
 console.log("Sexta-feira");
 break;
 case 7:
 console.log("Sábado");
 }
 }
