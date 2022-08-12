/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

const vogais = ["a", "e", "i", "o", "u"];
var entrada = "z"

if (vogais.includes(entrada.toLowerCase())) {
    console.log("vogal")
} else {
    console.log("consoante")
}