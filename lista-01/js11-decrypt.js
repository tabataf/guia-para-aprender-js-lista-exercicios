/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

 var texto = 'bcbdbuf'
 var textoDesCripto=[]
 for (i of texto){
     if (i=="@"){
         textoDesCripto +="z"
     } else if (i=="$"){
         textoDesCripto +="Z"
     }
     else {
         textoDesCripto += String.fromCharCode(i.charCodeAt(0)-1)
     }
 }
 console.log(textoDesCripto)
