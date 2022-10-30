/* 
Faça um algoritmo que dado as 3 notas de um aluno em um semestre da faculdade, calcule e imprima sua média e a sua classificação conforme tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.
*/
const nota1 = 7;
const nota2 = 9;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);


if (media < 5) {
    console.log('Você foi reprovado!')
} else if (media >= 5 && media <= 7) {
    console.log('Você está de recuperação!')

} else {
    console.log('Você está aprovado')
}