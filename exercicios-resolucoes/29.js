var a = 3
var b = 2
var c = 4

if (a > b && a > c) {

    var primeiroMaior = a

    if (b > c) {

        var segundoMaior = b

    } else {

        var segundoMaior = c

    }

} else if (b > a && b > c) {

    var primeiroMaior = b

    if (a > c) {

        var segundoMaior = a

    } else {

        var segundoMaior = c

    }

} else {

    var primeiroMaior = c

    if (b > a) {

        var segundoMaior = b

    } else {

        var segundoMaior = a

    }

}

soma = primeiroMaior + segundoMaior

console.log(soma)
console.log(primeiroMaior)
console.log(segundoMaior)