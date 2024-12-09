import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();
let opcao;

console.log("\nBem-vindo! Escolha uma das opcoes abaixo: ")

do{
    console.log("\n");
    console.log("*".repeat(50));
    
    console.log('\n1 - Adicionar Cliente na Fila \n2 - Listar todos os Clientes \n3 - Retirar Cliente da Fila \n0 - Sair');

    console.log("\n");
    console.log("*".repeat(50));

    opcao = readlinesync.questionInt('Entre com a opcao desejada: ')

    switch(opcao){
        case 1:
            fila.enqueue(readlinesync.question('Digite seu nome: '));
            console.log('\nFila: ')
            fila.printQueue();
            console.log('\nCliente adicionado!');
            break;
        case 2:
            console.log('\nLista de clientes na fila: ');
            fila.printQueue();
            break;
        case 3:
            if(fila.isEmpty()){
                console.log('A fila esta vazia!');
            }else{
                console.log('\nFila: ');
                fila.dequeue();
                fila.printQueue();
                console.log('\nO cliente foi chamado!')
            }
            break;
        case 0:
            console.log('\nPrograma Finalizado!');
            break;
        default:
            console.log('\nOpcao Invalida!');
            break;
    }

}while(opcao != 0);

