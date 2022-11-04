
 const {gets,print} = require('./funcoes-auxiliares'); 

//console.log(funcoes.gets())

//Conceito de destruct
/*Linhas 13 e 15 são similars ao bloco de inicio na linha 9. Só é mais clean.

const pessoa ={
    nome: 'Janaina'
};

//const {nome} = pessoa;

const nome = pessoa.nome; */

//Posso descontruir o objeto no momento da importação.Exemplo:
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);