/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

 let entrada = "n";
 let palavresVerdade = ["y", "yes", "s", "sim", "👍", "1"];
 let resultado = palavresVerdade.includes(entrada.toLowerCase());
 
 console.log(resultado);
