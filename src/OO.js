/*function Pokemon(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
}

const pikachu = new Pokemon("Pikachu", "elétrico");*/

// COM O ES6
class Pokemon {
    // # transforma em propriedade privada
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHP() {
        console.log(this.#hp);
    }
}

// herança no ES6
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    //polimorfismo
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
    
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHP();

const pikachu = new Pokemon('pikachu','elétrico');
pikachu.atacar('choque do trovão');

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);