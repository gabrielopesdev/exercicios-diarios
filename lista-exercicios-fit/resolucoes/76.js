// criar uma classe para aluno que receba nome, matricula e as notas deste aluno
// esse sistema deve calcular as notas desse aluno e jungar se ele esta aprovado ou não

class Aluno {

    constructor(nome, matricula, n1, n2, n3, media, situacao) {

        this.nome = nome
        this.matricula = matricula
        this.n1 = n1
        this.n2 = n2
        this.n3 = n3
        this.media = null
        this.situacao = null

    }

    get calcMedia() {

        this.media = Math.trunc((this.n1 + this.n2 + this.n3) / 3)

        if (this.media >= 6) {

            this.situacao = `APROVADO`

        } else {

            this.situacao = `REPROVADO`

        }

        console.log(this)

    }

}

aluno = new Aluno(`Gabriel`, 123, 10, 1, 10)

console.log(aluno)
console.log(aluno.calcMedia)