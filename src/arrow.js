const minhaFuncao = () => "Diz Olá";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante : 'Ford'
})

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    //this não vai funcionar qdo utilizamos arrow function nesse conceito, retornará undefined
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)