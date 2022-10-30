function escrevaNome(nome) {
    return 'Meu nome é:' + nome;
}
escrevaNome('Janaina');
escrevaNome('Adriano');

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('Janaina ' + ' tenho ' + idade + 'anos e sou maior de idade '))
    } else {
        console.log('Você é menor de idade')
    }
}
verificarMaioridade(19);

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100));
}


const precoEtiqueta = 100;
const formaPagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}
if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (
    formaPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10))
}