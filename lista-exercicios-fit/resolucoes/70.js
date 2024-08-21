// Leia a idade de uma pessoa expressa em anos, meses e dias
// exiba essa idade expressa em apenas dia

const date = new Date()
const anoAtual = date.getFullYear()
const mesAtual = date.getMonth() + 1
const diaAtual = date.getDate()

const dataAtual = `${diaAtual}/${mesAtual}/${anoAtual}`

const diaNasc = 12
const mesNasc = 12
const anoNasc = 2002

const dataNascimento = `${diaNasc}/${mesNasc}/${anoNasc}`

function calcIdade() {

    var nDias = (diaAtual - diaNasc) + ((mesAtual - 1) - mesNasc * 30) + (((anoAtual - anoNasc) * 12) *30)

    console.log(nDias)

}

calcIdade()
console.log(dataNascimento)
console.log(dataAtual)