let meuMAp = new Map();

meuMAp.set("nome", "Rodrigo");
meuMAp.set("stack", "html, css, js");

console.log(meuMAp);

const nome = meuMAp.get("nome");

console.log(nome);

console.log(meuMAp.size);

console.log(meuMAp.has("nome"));

//meuMAp.clear();

for (let chave of meuMAp.keys()) {
    console.log(chave);
}

for (let valor of meuMAp.values()) {
    console.log(valor);
}

for (let entrada of meuMAp.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMAp.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMAp.delete("stack");

console.log(meuMAp);

// SET
const cpfs = new Set();

cpfs.add('39673501009');
cpfs.add('01781729018');
cpfs.add('26772879007');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Rodrigo', 'Gian Souza', 'Maria', 'José', 'Rodrigo', 'Maria'];

//para eliminar itens duplicados
const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);
