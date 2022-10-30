const numero = 0;
const numeroDivisilPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('Número inválido');

} else if (numeroDivisilPor5) {
    console.log('SIM');
} else {
    console.log('NÃO');
}


/*
Otimização do código pode ser feita inserido a condição direto no IF

const numero =5;
if((numero % 2) ===0) {
    console.log('O número é par');
}else {
    console.log('O número é ímpar);
}

No caso de variaveis booleanas utilizar 'is' no início da variavel.

Em casos de  regras de negócio complexas, melhor utilizar a variavel para guardar a regra e depois colocar dentro do IF.

/* 
Estrutura de condicionais :

if(){}

else if {}

else{] - apenas no último bloco de condicional, poie ele encerra o ciclo do programa, não executa nada após ele.
 
*/


*
/