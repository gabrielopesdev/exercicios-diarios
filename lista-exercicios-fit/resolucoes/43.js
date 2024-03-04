a = 5
b = 3
c = 3

if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a == b && b == c) {

        var mens = "Triãngulo Equilátero"

    } else {

        if (a == b && b == c && a == c) {

            var mens = "Triângulo Isóceles"

        } else {

            var mens = "Triãngulo Escaleno"

        }

    }

} else {

    var mens = "Não e possível formar um triângulo"

}

console.log(mens)

// respostas:

// 01- "Não é possível formar um triângulo"
// 02- "Triângulo Escaleno"
// 03- "Não é possível formar um triângulo"
// 04- "Triângulo Equilátero"
// 05- "Triângulo Escaleno"