// ler dois valores inteiros
// validar esses valores baseado em tamanho em relação ao outro
// encontrar os numeros inteiros existentes entre eles
// soma-los exibi-los na tela
// mostrar a soma na tela

v1 = 1
v2 = 5

function somarValores(v1, v2) {

    soma = 0

    if (v1 < v2) {

        for(i = v1; i <= v2; i++) {

            soma += i

        }

        console.log(soma)

    } else if (v2 < v1) {
    
        for(i = v2; i <= v1; i++) {

            soma += i

        }

        console.log(soma)


    } else {

        console.log("não existe números interos entre esses valores")

    }
}

somarValores(v1, v2)