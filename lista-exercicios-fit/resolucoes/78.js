// criar um classe produto com os atributos nome, preço e quantidade em estoque
// criar metodos para calcular o valor total em estoque e verificar se existe no estoque

class Produto {

    constructor(nome, preco, quantidade) {

        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade

    }

    get calcularValorTotal() {

        if (this.quantidade > 0) {

            return this.quantidade * this.preco

        } else {

            return `Não temos ${this.nome} em estoque`

        }

    }

}

var sabao = new Produto(`sabão`, 10, 0)
console.log(sabao)
console.log(sabao.calcularValorTotal)