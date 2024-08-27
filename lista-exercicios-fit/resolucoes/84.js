// criar uma classe chamada loja virtual
// ela deve poder cadastrar produtos, gerar carrinho de compras, aplicar descontos e calcular o valor total da compra


class Loja {

    constructor() {
    
        this.produtos = []
        this.carrinho = []
        this.valorTotalDoCarrinho = 0

    }

    adicionarProduto(nome, preco) {

        if (typeof nome === "string" && typeof preco === "number") {

            this.produtos.push({nome, preco})

        } else {

            throw Error(`Os valores não são válidos`)

        }


    }

    adicionarAoCarrinho(nome) { 

        var produtoNome = nome

        var produtoAdicionado = this.produtos.find(produto => produto.nome === produtoNome)

        if (produtoAdicionado === undefined) {

            throw Error(`O produto ${nome} não existe`)

        } else {

            this.carrinho.push(produtoAdicionado)

        }
    }

    calcularValorDoCarrinho() {


        this.carrinho.map(produto => {

            this.valorTotalDoCarrinho += produto.preco

        })
    

    }

    aplicarDescontosNoCarrinho(porcentagem) {

        var desconto = (porcentagem / 100) * this.valorTotalDoCarrinho

        this.valorTotalDoCarrinho -= desconto

    }

}

loja = new Loja()

loja.adicionarProduto(`Sabão`, 10)
loja.adicionarProduto(`Saco de Arroz`, 20)

loja.adicionarAoCarrinho(`Sabão`)
loja.adicionarAoCarrinho(`Saco de Arroz`)

loja.calcularValorDoCarrinho()
loja.aplicarDescontosNoCarrinho(30)

console.log(loja)
