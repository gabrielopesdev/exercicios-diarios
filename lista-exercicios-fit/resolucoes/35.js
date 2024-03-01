// calcular o preço a ser pago
// considerar o percentual de desconto
// g = 3.30 a = 2.90

g = 3.30
a = 2.90

cliente = {
    litrosComprados: 50,
    tipoCombustivel: "gasolina"
}

if (cliente.tipoCombustivel == "álcool") {

    if (cliente.litrosComprados <= 20) {

        valorDesconto = (0.03 * (cliente.litrosComprados * a)) / 100
        valorFinal = Math.trunc((cliente.litrosComprados * a)- valorDesconto)

        console.log(valorFinal)

    } else {

        valorDesconto = (0.05 * (cliente.litrosComprados * a)) / 100
        valorFinal = Math.trunc((cliente.litrosComprados * a)- valorDesconto)

        console.log(valorFinal)

    }

} else if (cliente.tipoCombustivel == "gasolina") {

    if (cliente.litrosComprados <= 20) {

        valorDesconto = (0.04 * (cliente.litrosComprados * g)) / 100
        valorFinal = Math.trunc((cliente.litrosComprados * g) - valorDesconto)

        console.log(valorFinal)

    } else {

        valorDesconto = (0.06 * (cliente.litrosComprados * g)) / 100
        valorFinal = Math.trunc((cliente.litrosComprados * g) - valorDesconto)

        console.log(valorFinal)

    }
    
} else {

    console.log(`O tipo de combustível ${cliente.tipoCombustivel} não é válido`)

}