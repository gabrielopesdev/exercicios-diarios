// ler dois valores
// valídar se o segundo valor é zero(utilizando uma estrutura de repetição)
// fazer a divisão do primeiro pelo segundo valor

function obterNota(mensagem) {

    let nota
    do {
        nota = parseFloat(window.prompt(mensagem))
    } while (isNaN(nota) || nota < 1 || nota > 10)

    return nota

}

let n1 = obterNota("Digíte o primeiro valor...")
let n2 = obterNota("Digíte o segundo valor...")

let media = (n1 + n2) / 2

resultado = window.confirm(`A média entre ${n1} e ${n2} é ${media}. Você deseja fazer outra conta?`)

if (resultado == true) {

    let n1 = obterNota("Digíte o primeiro valor...")
    let n2 = obterNota("Digíte o segundo valor...")
    let media = (n1 + n2) / 2

    window.alert(`A média entre ${n1} e ${n2} é ${media}`)

}