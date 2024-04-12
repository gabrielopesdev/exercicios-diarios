valores = [1, 10, 5, 9, 8, 1, 10, 5, 9, 8]


// solução 01

function somarArr(arr) {

    somatorio = 0

    arr.forEach(x => {

        somatorio = x + somatorio

    })

    console.log(somatorio)

}

somarArr(valores)

// solução 02

function somarArray(arr) {

    soma = 0

    var soma = arr.reduce((acc, crr) => acc + crr)

    console.log(soma)

}

somarArray(valores)

// obs: o método reduce executa uma função em cada elemento do arr e gera um valor final baseado nisso