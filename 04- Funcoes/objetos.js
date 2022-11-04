
const pessoa = {
nome : 'Janaina Andrade',
idade : 33,
descrever: function (){
    
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);}
};

//console.log(jana.nome);
//console.log(jana.idade);

//incrementar novo dado de forma dinamica ao objeto.
//jana.altura = 1.68;

//posso também deletar valor de forma dinamica
//delete jana.idade;

//No caso de atribuir novo valor ao objeto, então terei a saída alterada de forma dinamica.
pessoa.nome = 'Adriano';
pessoa.idade = 34


//Posso sobrescrever uma função também, lembrando que o objeto sempre assumirá o último valor atribuido.
//pessoa.descrever = function(){
  //  console.log(`Meu nome é ${this.nome}`)};

//pessoa.descrever();

//sintaxe mais dinamica

const atributo = 'idade';

//Anotação de coleção
console.log(pessoa[`nome`])