/* 
 Faça um programa para calcular o valor de uma viagem.
 
 Você terá 5 variaveis. Sendo elas:
 1- Preço do etanol;
 2 - preço da gasolina;
 3 - O tipo de combustível que está no se carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distacia em KM da viagem.
 
 Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 3.37;
const precoGasolina = 4.89;
const kmPorLitros = 12;
const distancia = 709;
const tipoCombustivel = 'Gasolina';


const litrosConsumidos = distancia / kmPorLitros;


if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}