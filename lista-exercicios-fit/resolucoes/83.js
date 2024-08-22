// criar uma classe que represente uma instituição bancária
// ela deve conter metodos para cadastro, abertura de contas e realização de operações como saque, depósito e transferencia

class Banco {

    constructor() {

        this.contas = [];
        this.usuarios = [];

    }

    cadastrarUsuario(nome, idade) {

        const id = this.usuarios.length;
        this.usuarios.push({ nome, idade, id });
        return id;

    }

    abrirConta(nome) {

        const contaId = this.contas.length;
        this.contas.push({ nome, saldo: 0, id: contaId });
        return contaId;

    }

    depositar(valor, contaId) {

        this.contas[contaId].saldo += valor;
        return this.contas[contaId].saldo;

    }

    sacar(valor, contaId) {

        if (valor > this.contas[contaId].saldo) {

            throw new Error(`O usuário ${this.contas[contaId].nome} não possui essa quantia na conta`);

        } else {

        this.contas[contaId].saldo -= valor;
        return this.contas[contaId].saldo;

        }

    }

    transferir(contaOrigemId, contaDestinoId, valor) {

        if (this.contas[contaOrigemId].saldo < valor) {

            throw new Error(`O usuário ${this.contas[contaOrigemId].nome} não possui essa quantia na conta`);

        } else {

        this.contas[contaOrigemId].saldo -= valor;
        this.contas[contaDestinoId].saldo += valor;

            return {

                contaOrigem: this.contas[contaOrigemId].saldo,
                contaDestino: this.contas[contaDestinoId].saldo
                
            };

        }
    }
}


const banco = new Banco();

const usuario1Id = banco.cadastrarUsuario('Gabriel', 18);
const usuario2Id = banco.cadastrarUsuario('Maria', 28);

const conta1Id = banco.abrirConta('Gabriel');
const conta2Id = banco.abrirConta('Maria');

banco.depositar(200, conta1Id);
banco.depositar(300, conta2Id);

banco.transferir(conta1Id, conta2Id, 50);

console.log(banco.contas[conta1Id]);
console.log(banco.contas[conta2Id]);
