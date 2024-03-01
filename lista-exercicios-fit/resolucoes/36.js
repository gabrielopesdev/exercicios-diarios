// somar a idade do homem mais velhos com a mulher mais nova
// multiplicar a idade dos mais outros dois

primeiroHomem = 20
segundoHomem = 19

primeiraMulher = 20
segundaMulher = 18

if (primeiroHomem > segundoHomem) {

    homemVelho = primeiroHomem
    homemNovo = segundoHomem

} else {

    homemVelho = segundoHomem
    homemNovo = primeiroHomem

}

if (primeiraMulher > segundaMulher) {

    mulherVelha = primeiraMulher
    mulherNova = segundaMulher

} else {

    mulherVelha = segundaMulher
    mulherNova = primeiraMulher

}

soma = homemVelho + mulherNova
console.log(soma)

produto = homemNovo * mulherVelha
console.log(produto)
