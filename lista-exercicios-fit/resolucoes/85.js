// criar uma classe chamada agenda
// deve permirtir criar, editar e remover contatos, buscar por eles a partir de um numero de telefone

class Agenda {

    constructor() {
        this.contatos = []
    }

    adicionarContato(nome, numero) {

        this.contatos.push({nome, numero})
    }

    removerContato(numeroContato) {

        this.contatos = this.contatos.filter(element => element.numero != numeroContato)
    }

    editarNomeContato(numeroContato, novoNome) {

        this.contatos.forEach(objeto => {
            
            if(objeto.numero == numeroContato) {

                return objeto.nome = novoNome

            }
        })
    }

    editarNumeroContato(numeroAntigo, numeroNovo) {

        this.contatos.forEach(objeto => {

            if(objeto.numero == numeroAntigo) {

                return objeto.numero = numeroNovo

            }
        })
    }

    buscarContato(numeroContato) {

        return this.contatos.find(contato => contato.numero == numeroContato) || null

    }
}

agenda = new Agenda()
agenda.adicionarContato(`Gabriel`, 47534895734)
agenda.adicionarContato(`Marcio`, 11231233424)
agenda.adicionarContato(`Mylon`, 76575675643)
agenda.adicionarContato(`José`, 23346556555)

agenda.removerContato(23346556555)

agenda.editarNomeContato(11231233424, `Fernado`)

agenda.editarNumeroContato(76575675643, 11111111111)

console.log(agenda)
console.log(agenda.buscarContato(47534895734))