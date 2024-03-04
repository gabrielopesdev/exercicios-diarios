// ler as notas de um aluno (só devem ser aceitos valores de 1 a 10)
// calcular sua média
// validar os valores inseridos utilizando "estrutura de repetção"

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
console.log(media)
window.alert(`A média entre ${n1} e ${n2} é ${media}`)