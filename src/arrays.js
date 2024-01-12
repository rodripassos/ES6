const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// ANTES do ES6
for (let i=0 ; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

//COM O ES6
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Maria', 'João', 'Paula'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'FrontEnd'
    }
    return itemAtual;
})

console.log(alunos2);

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
}) 

console.log(paula);

const Indicepaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(Indicepaula);

//every
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'FrontEnd'
})

console.log(todosAlunosDeFrontEnd);

const existeAlgumAlunoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend'
})

console.log(existeAlgumAlunoBackend);

function filtraAlunosBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosBackend)

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

//mesma logica do reduce utilizando for
let somaComFor = 0;

for (let i=0; i < nums.length ; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '');

console.log(nomeDosAlunos);