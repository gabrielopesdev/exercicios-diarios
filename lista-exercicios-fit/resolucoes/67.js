function calcMedia(v1, v2) {

    soma = 0
    numElementos = 0

    for (i = v1; i <= v2; i++) {

        soma += i
        numElementos++

    }

    media = soma / numElementos
    console.log(media)
}

calcMedia(15, 100)

