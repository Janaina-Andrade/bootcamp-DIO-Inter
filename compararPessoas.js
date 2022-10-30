class Pessoa{

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
}

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p2.nome}`)
    }else{
        console.log( `${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const jana = new Pessoa('Jana', 34);
const adriano = new Pessoa('Adriano', 34)

compararPessoa(jana, adriano)