/*

1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto de combustível por kilômetro rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso */

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

   constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calculoGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const fit = new Carro('Honda', 'Preta', 1/12);
console.log(fit.calculoGastoPercurso(70,5))

const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calculoGastoPercurso(70,5))