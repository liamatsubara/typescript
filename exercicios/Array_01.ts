/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import readlinesync = require('readline-sync');

//criei minha coleção do tipo string de tamanho 5
const cores: Array<string> = new Array<string>(5);

//solicitar entrada de dados via teclado
for(let i = 0; i < cores.length; i++){
    cores[i] = readlinesync.question(`Digite a cor ${i+1}: `);
}

//listar todas as cores:
console.log('\nLista de cores: ');
console.table(cores);

//criar array ordenado em ordem crescente
const coresOrdenadas: Array<string> = Array.from(cores).sort();
console.log('\nLista de cores ordenadas: ');
console.table(coresOrdenadas);
