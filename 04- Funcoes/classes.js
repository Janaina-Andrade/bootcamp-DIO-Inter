class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

 descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    };
}

    const jana = new Pessoa('Janaina', 33);
    const adriano = new Pessoa('Adriano', 34);

        jana.descrever();

        console.log(adriano)
//Clase é a definição do que deve ser e uma instância é uma ocorrência de uma pessoa.
//O exemplo do carro: o carro tem uma cor e um ano, um carro branco do ano 2017 é uma ocorrencia.
//O construtor é legal de ser utilizado pois podemos armazenar alguns lógicos, por exemplo aqui neste documento utilizamos o ano de nascimento dentro do Constructor.