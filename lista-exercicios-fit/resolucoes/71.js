// ler tres valores
// calcular a media ponderada entre eles

valores = [10, 8, 7]
pesos = [2, 3, 5]

function calcMedia(v1, v2, v3) {

    mult = (valores[0] * pesos[0]) + (valores[1] * pesos[1]) + (valores[2] * pesos[2])
    media = mult / (pesos[0] + pesos[1] + pesos[2])

    console.log(media)

}

calcMedia(valores[0], valores[1], valores[2])