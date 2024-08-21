// uma classe retangulo que receaba dados de altura e largura
// essa classe deve possuir metodos para calcular a area de o perimetro desse retangulo

class Retangulo {

    constructor(altura, largura) {

        this.altura = altura
        this.largura = largura

    }

    get perimetro() {

        return (this.altura * 2) + (this.largura * 2)

    }

    get area() {

        return this.altura * this.largura

    }

}

forma = new Retangulo(10, 15)


console.log(forma.perimetro)
console.log(forma.area)