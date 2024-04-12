valores = [12, 56, 23, 98, 87, 12, 44]

// solução 01

function somarValores(arr) {

    soma = 0

    arr.forEach(x => {
        
        if (x <= 40) {

            soma = x + soma

        }
    });

    console.log(soma)

}

somarValores(valores)

// solução 02

function somarArr(arr) {

    somatorio = arr.reduce((acc, crr) => {

        if (crr <= 40) {

            return acc + crr
        
        } else {

            return acc

        }

    }, 0)

    console.log(somatorio)

}

somarArr(valores)