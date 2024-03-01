// analizar o nome, quantidade e valor unitário de um produto
// calcular o valor total(total = quatidade * valor unitário)
// calcular o desconto sobre esse valor

produto = {
    nome: "bombom",
    valorUnitario: 10,
    quantidade: 10,
}

valorTotal = produto.valorUnitario * produto.quantidade

if (produto.quantidade <= 5) {

    desconto = (2 * valorTotal) / 100
    valorFinal = valorTotal - desconto
    console.log(valorFinal)

} else if (produto.quantidade > 5 && produto.quantidade <= 10) {

    desconto = (3 * valorTotal) / 100
    valorFinal = valorTotal - desconto
    console.log(valorFinal)

} else {

    desconto = (5 * valorTotal) / 100
    valorFinal = valorTotal - desconto
    console.log(valorFinal)

}