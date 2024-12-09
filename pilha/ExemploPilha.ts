import { Stack } from "./Stack";


const pilha = new Stack<string>();

pilha.push("prato azul");
pilha.push("prato verde");
pilha.push("prato vermelho");

//imprime ao contrario, o ultimo que entra fica no topo
pilha.printStack();

console.log(pilha.contains("prato branco"));

//remove do topo
pilha.pop();

pilha.printStack();

