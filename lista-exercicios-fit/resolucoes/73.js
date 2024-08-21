// criar uma classe circulo que possua um atributo para armazenar o raio
// deve conter metodos para calcular o perimetro e a área  do circulo

class Circulo {

    constructor (raio) {

        this.raio = raio

    }

    get calcPerimetro() {

        return this.raio * 2 * 3.14

    }

    get calcArea() {

        return (this.raio * this.raio) * 3.14
        
    }

    

}

var forma = new Circulo(10)

console.log(forma.calcPerimetro)
console.log(forma.calcArea)