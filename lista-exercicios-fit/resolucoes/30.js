// jeito 01

a = 1
b = 3
c = 2

function ordenar() {

    numerosOrdenados = []
    numerosOrdenados.push(a, b, c)
    numerosOrdenados.sort()

    for(i = 0; i < numerosOrdenados.length; i++) {

        console.log(numerosOrdenados[i])
    }
}

ordenar()

//jeito 02

console.log("Segunda forma:")

v1 = 222
v2 = 7
v3 = 44

if(v1 > v2 && v1 > v3) {

    var ultimaPosicao = v1

    if (v2 > v3) {

        var penultimaPosicao = v2
        var primeiraPosicao = v3

    } else {
        
        var penultimaPosicao = v3
        var primeiraPosicao = v2

    }
} else if (v2 > v1 && v2 > v3) {

    var ultimaPosicao = v2

    if (v1 > v3) {

        var penultimaPosicao = v1
        var primeiraPosicao = v3

    } else {

        var penultimaPosicao = v3
        var primeiraPosicao = v1

    }

} else {

    var ultimaPosicao = v3

    if (v1 > v2) {

        var penultimaPosicao = v1
        var primeiraPosicao = v2

    }

}

console.log(primeiraPosicao)
console.log(penultimaPosicao)
console.log(ultimaPosicao)