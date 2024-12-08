/*
Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Colection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);
let encontrado = false;

const nProcurado = readlinesync.questionInt('Digite o numero que voce deseja encontrar: ');

for(let numero of numeros){
    if(numero === nProcurado){
        console.log(`O numero ${numero} foi encontrado!`);
        encontrado = true;
        break;
    }
}

if(!encontrado){
    console.log(`O numero ${nProcurado} não foi encontrado!`)
}