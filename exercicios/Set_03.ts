/*
Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
*/

import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt(`Digite o numero ${i+1}: `));
}

console.table(numeros);