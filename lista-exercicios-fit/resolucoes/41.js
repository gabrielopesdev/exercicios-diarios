// pegar as notas e media dos exs. nas três avaliações
// calcular a média de aproveitamento do aluno
// definir o seu conceito de acordo com a sua nota 

boletim = {
    n1: 10,
    n2: 9,
    n3: 9,
    mediaExercicios: 9,
}

boletim.mediaAproveitamento = Math.trunc((boletim.n1 + boletim.n2 * 2 + boletim.n3 * 3 + boletim.mediaExercicios) / 7)

if (boletim.mediaAproveitamento >= 9) {

    boletim.conceitoAluno = "A"

} else if (boletim.mediaAproveitamento >= 7.5 && boletim.mediaAproveitamento < 9) {

    boletim.conceitoAluno = "B"

} else if (boletim.mediaAproveitamento >= 6 && boletim.mediaAproveitamento < 7.5) {

    boletim.conceitoAluno = "C"

} else {

    boletim.conceitoAluno = "D"

}

console.log(boletim)