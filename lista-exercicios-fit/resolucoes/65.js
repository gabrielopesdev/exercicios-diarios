// ler 2 valores diferentes
// escrever a soma dos numeros inteiros entre eles

// achar esses valores
valorUm = 1
valorDois = 5

function somarInteiros(v1, v2) {

    let soma = 0

    for (i = v1; i <= v2; i++) {

        soma += i

    }
    
    console.log(soma)
}

somarInteiros(valorUm, valorDois)