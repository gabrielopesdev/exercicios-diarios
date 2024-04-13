// ler o numero total de mercadorias em um estoque e o valor de cada mercadoria
// calcular a media do valor desses marcadorias

const totalEstoque = 567
const valorMercadoria = 97.60

function calcMedia(total, valor) {

    valorTotal = total * valor
    media = valorTotal / totalEstoque

    console.log(valorTotal)
    console.log(media)

}

calcMedia(totalEstoque, valorMercadoria)