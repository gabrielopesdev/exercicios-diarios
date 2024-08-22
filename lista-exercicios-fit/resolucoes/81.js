// criar uma classe paciente com atributos de nome idade e historico de consultas
// adicionar metodos para adicionar novas consultas

class Paciente {

    constructor(nome, idade) {
        
        this.nome = nome
        this.idade = idade
        this.historicoConsultas = []

    }

    get exibirHistoricoConsulta() {

        if(this.historicoConsultas === 0) {

            console.log(`O paciente ${this.nome} não realizou consultas`)

        } else {

            console.log(this.historicoConsultas)

        }

    }

    adicionarConsulta(data, descricao) {

        var consulta = {
            data: data,
            descricao: descricao
        }

        this.historicoConsultas.push(consulta)
    }

}

paciente = new Paciente(`Gabriel`, 18, `olicular`)
console.log(paciente)

paciente.adicionarConsulta(`22-03-22`, `ortopedia`)
console.log(paciente)
paciente.adicionarConsulta(`22-12-24`, `urologia`)
paciente.exibirHistoricoConsulta