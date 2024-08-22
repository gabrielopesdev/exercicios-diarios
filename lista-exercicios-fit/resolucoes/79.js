// criar uma classe chamada triangulo que armazene a medida de seu lados
// criar um metodo para verificar se ele é válido para calcular sua area

class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    // Método para calcular a área do triângulo usando a fórmula de Herão
    calcularArea() {
        const { ladoA, ladoB, ladoC } = this;
        // Verificação direta da validade do triângulo
        if (
            ladoA + ladoB > ladoC &&
            ladoA + ladoC > ladoB &&
            ladoB + ladoC > ladoA
        ) {

            // fórlula de Herão:
            const s = (ladoA + ladoB + ladoC) / 2;
            return Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));


        } else {
            throw new Error("Os lados fornecidos não formam um triângulo válido.");
        }
    }
}

// Exemplo de uso:
const triangulo = new Triangulo(3, 4, 5);
console.log(triangulo.calcularArea()); // Resultado: 6
