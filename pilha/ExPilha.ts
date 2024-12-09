import readlinesync = require('readline-sync');
import { Stack } from './Stack';

const pilha = new Stack<string>();
let opcao;

console.log("\nBem-vindo! Escolha uma das opcoes abaixo: ")

do{
    console.log("\n");
    console.log("*".repeat(50));

    console.log('\n1 - Adicionar livro na pilha \n2 - Listar todos os livros \n3 - Retirar livro da pilha \n0 - Sair');

    console.log("\n");
    console.log("*".repeat(50));

    opcao = readlinesync.questionInt('Entre com a opcao desejada: ');

    switch(opcao){
        case 1:
            pilha.push(readlinesync.question('Digite o nome: '));
            console.log('\nPilha:');
            pilha.printStack();
            console.log('\nLivro adicionado!');
            break;
        case 2:
            console.log('\nLista de livros na pilha:');
            pilha.printStack();
            break;
        case 3:
            if(pilha.isEmpty()){
                console.log('\nA pilha esta vazia!');
            }else{
                console.log('\nPilha:');
                pilha.pop();
                pilha.printStack();
                console.log('\nUm livro foi retirado da pilha!')
            }
            break;
        case 0:
            console.log('\nPrograma Finalizado!')
            break;
        default:
            console.log('\nOpcao Invalida!')
            break;
    }
}while(opcao != 0);