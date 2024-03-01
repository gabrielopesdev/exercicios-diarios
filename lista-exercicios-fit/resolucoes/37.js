// calcular a quantidade em quilos das frutas
// calcular o valor a ser pago
// calcular o desconto

cliente = {
    kgMaca: 3,
    kgMorango: 10
}

if (cliente.kgMaca <= 5) {

    precoMaca = 1.80


} else {

    precoMaca = 1.50

}

if (cliente.kgMorango <= 5) {

    precoMorango = 2.50

} else {

    precoMorango = 2.20

}

valorTotal = (precoMaca * cliente.kgMaca) + (precoMorango * cliente.kgMorango)

if ((cliente.kgMaca + cliente.kgMorango) >= 8) {

    desconto = (10 * valorTotal) / 100
    valorFinal = Math.trunc(valorTotal - desconto)

} else {

    valorFinal = Math.trunc(valorTotal)
}

console.log(valorFinal)
