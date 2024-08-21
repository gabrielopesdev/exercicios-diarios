// criar um programa que sirva de APP para uma empresa
// esse programa deve ter uma classe de usuários; essa classe deve conter: nome, cpf, tituloTrabalho e data de produção
// deve conter outra classe com os metodos: processo de analise e registro do proscesso



// classe para os usuários

class Usuario {

    constructor (nome, cpf, email, matricula = null) {

        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.matricula = matricula

    }
}

// classe para os proscessos

class ProcessoRegistro {

    constructor (protocolo, autor, tituloTrabalho, dataProducao) {

        this.protocolo = protocolo
        this.autor = autor
        this.tituloTrabalho = tituloTrabalho
        this.dataProducao = dataProducao

    }

    analisarTrabalho(dataAnalise, matriculaAnalisada, status) {

        this.dataAnalise = dataAnalise
        this.matriculaAnalisada = matriculaAnalisada
        this.status = status

    }

}

// criando um cliente

const cliente = new Usuario(`Marcos`, 12345678909, `marcos@gmail.com`)

// criando um funcionário

const profissional = new Usuario(`Gabriel`, 12345678907, `gabriel@gmail.com`, `PROF123`)

// criando um registro

const processo = new ProcessoRegistro(`1234`, cliente, `Desenvolvimento de software`, `21-08-2024`)

// analisando o Processo

processo.analisarTrabalho(`22-09-24`, profissional.matricula, `deferido`)


console.log(processo)