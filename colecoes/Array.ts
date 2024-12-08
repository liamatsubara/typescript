import readlinesync = require('readline-sync');

//const para ninguem mexer na estrutura, só consegue manipular os dados através dos métodos

//criamos a coleção array vazia
const numeros: Array<number> = new Array<number>();

//adicionamos os valores na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7, 3);

//for of - for mais enxuto
//a variavel numero armazena o elemento atual que o for esta lendo
//não ultrapassa o limite do array, não precisa de contador, ele percorre o array inteiro

//listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero);
}

//adicionamos um numero utilizando a entrada de dados via teclado
numeros.push(readlinesync.questionFloat('Digite um numero: '));

numeros.unshift(2, 4.5, 8, 9);

console.table(numeros);

//push coloca no final, unshift no começo

//includes faz uma busca, se for numero repetido, mostra a primeira ocorrencia
console.log('\nExiste o numero 10 no array? ', numeros.includes(10));

//indexof procura o indice do elemento
console.log('\nQual é o indice do numero 3 no array? ', numeros.indexOf(3));

//numero que quero apagar, quantos numeros a partir do indice quero apagar, 1 para apagar apenas o indice que tem o 10
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);