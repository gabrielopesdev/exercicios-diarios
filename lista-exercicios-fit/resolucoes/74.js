// criar um sistema bancario onde o individuo possa se cadastrar
// criar metodos para possibilitar saque e depositos nessa conta

class Conta {

    constructor(nome, numero, saldo) {

        this.nome = nome
        this.numero = numero
        this.saldo = saldo

    }

    sistDepositar(valor) {

        return this.saldo = this.saldo + valor

    }

    sistSaque(valor) {

        return this.saldo = this.saldo - valor

    }

}

usuario = new Conta(`Gabriel`, 123, 300)

usuario.sistDepositar(200)
usuario.sistSaque(500)

console.log(usuario)