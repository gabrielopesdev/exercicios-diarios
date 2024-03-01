// pegar o ano de nascimento, o ano de ingresso na empressa e o código de um funcionário
// verificar se o funcionário requer ou não uma aposentadoria

dataAtual = new Date()
anoAtual = dataAtual.getFullYear()

funcionario = {
    codigo: 1449,
    anoNascimento: 1960,
    anoIngresso: 1998
}

funcionario.idade = anoAtual - funcionario.anoNascimento
funcionario.tempServico = anoAtual - funcionario.anoIngresso

console.log(funcionario)

if (funcionario.idade >= 65 || funcionario.tempServico >= 30 || (funcionario.idade >= 60 && funcionario.tempServico >= 25)) {

    console.log("Requerer aposentadoria")

} else {

    console.log("Não requerer")

}