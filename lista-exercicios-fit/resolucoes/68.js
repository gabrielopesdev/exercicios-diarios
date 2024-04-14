// leia o numero de mercadorias do estoque e o valor de cada mercadoria
// preciso: numero total de mercadorias em estoque
// preciso: valor de cada mercadoria
// preciso: valor total em estoque
// preciso: media dos valores das mercadorias


mercadorias = [10, 22, 73]

function calcEstoque(mercadorias) {

    soma = 0
    contador = 0
    totalMercadorias = mercadorias.length

    mercadorias.forEach((x) => {

        contador++
        soma += x
        console.log(`O valor da ${contador}° mercadoria é: R$${x},00`)

    })

    media = soma / mercadorias.length 

    console.log(`O total de mercadorias é: ${totalMercadorias}`)
    console.log(`O valor total em mercadorias do estoque é:R$ ${soma},00`)
    console.log(`A media dos valores das mercadorias em estoque é: R$${media},00`)

}

calcEstoque(mercadorias)