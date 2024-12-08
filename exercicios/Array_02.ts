/*
Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import readlinesync = require('readline-sync');

//declaração da collection do tipo number
const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

//pergunto o numero que o usuario quer encontrar e armazeno na variavel
let nProcurado = readlinesync.questionInt('Digite o numero que voce deseja encontrar: ');
let encontrado = false;

//vasculhar a collection
for(let i = 0; i < numeros.length; i++){
    if(nProcurado === numeros[i]){
        console.log(`O numero ${nProcurado} esta localizado na posicao ${numeros.indexOf(nProcurado)}`);
        encontrado = true;
        break;
    }
}

if(!encontrado){
    console.log(`O numero ${nProcurado} nao foi encontrado!`);
}
