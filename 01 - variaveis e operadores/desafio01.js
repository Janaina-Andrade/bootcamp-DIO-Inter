/*Faça um programa para calcular o valor gasto de combustível em uma viagem
Você terá 3 variaveis. Sendo:
1 Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em Km de viagem;


Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 4.19;
const kmPorLitros = 14;
const distancia = 300;

const litrosConsumidos = distancia / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2));