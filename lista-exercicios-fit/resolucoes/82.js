// Criar uma classe livro com atributos de título, autor e numero de páginas
// adicionar métodos para emprestar, devolvê-lo e verificar disponibilidade

class Livro {

    constructor(titulo, autor) {

        this.titulo = titulo
        this.autor = autor
        this.disponibilidade = true

    }

    get exibirLivro() {

        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Disponibilidade: ${this.disponibilidade ? 'Disponível' : 'Indisponível'}`)
    }

    emprestar() {

        if(this.disponibilidade == true) {

            this.disponibilidade = false
            console.log(`O livro ${this.titulo} foi emprestado`)

        } else {

            console.log(`O livro ${this.titulo} já foi emprestado`)

        }

    }

    devolver() {

        if(this.disponibilidade == true) {
            console.log(`O livro ${this.titulo} foi devolvido com suscesso`)


        } else {
            console.log(`O livro ${this.titulo} já foi devolvido`)


        }

    }


}

var livro = new Livro(`Crepúsculo dos ídolos`, `Nietzsche`)
console.log(livro)

livro.devolver()