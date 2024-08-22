// criar uma classe Carro com atributos de marca, modelo e velocidade
// criar metodos para acelerar frear e exibir a velociade atual

class Carro {

    constructor(marca, modelo, velocidade) {

        this.marca = marca
        this.modelo = modelo
        this.velocidade = velocidade

    }

    frear() {

        this.velocidade = 0
        return this.velocidade

    }

    exibirVelocidade() {

        return this.velocidade

    }

    acelerar(aceleracao) {

        this.velocidade = this.velocidade + aceleracao
        return this.velocidade

    }

}

carro = new Carro(`nissan`, `GTR`, 100)
console.log(carro)

console.log(carro.exibirVelocidade())
console.log(carro.frear())
console.log(carro.acelerar(250))
console.log(carro)