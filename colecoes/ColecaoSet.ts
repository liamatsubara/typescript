const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Maça");
frutas.add("Caqui");
frutas.add("Banana");
frutas.add("Manga");

console.table(frutas);

console.log("A fruta morango existe? ", frutas.has("Morango"));

frutas.delete("Caqui");

console.table(frutas);

//array.from cria um novo array tendo como base o set frutas
let setOrdenado: Array<string> = Array.from(frutas).sort();

console.table(setOrdenado);