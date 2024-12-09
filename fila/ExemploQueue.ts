import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

//adiciona a fila
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

fila.enqueue(readlinesync.question("Digite o seu nome: "));

//mostra a fila
fila.printQueue();

//verifica se existe ou não o elemento
console.log(fila.contains("Alana"));

//conta quantos tem na fila
console.log(fila.count());

console.log("\nChamar: ", fila.dequeue())

fila.printQueue();

//chamar sem remover
console.log("O proximo é: ", fila.peek());


