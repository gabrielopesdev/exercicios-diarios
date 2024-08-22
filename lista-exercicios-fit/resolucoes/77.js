// criar uma classe chamada funcionario como nome, salário, cargo
// implementar metodos para calcular o salário líquido(considerar desconto de impostos e benefícios)

class Usuario {

    constructor(nome, cargo, salario) {

        this.nome = nome
        this.cargo = cargo
        this.salario = salario

    }

    get calcSalario() {

        var { salario } = this

        if (salario <= 2259) {

            var salarioLiguido = this.salario

        } else if (salario > 2259 && salario <= 2826) {

            var salarioLiguido = salario - ((7,5 / 100) * salario)

        } else if (salario > 2826 && salario <= 3751) {

            var salarioLiguido = salario - ((15 / 100) * salario)

        } else  {

            var salarioLiguido =salario - ((22.5 / 100) * salario)

        }

        return salarioLiguido
        
    }

}

funcionario = new Usuario(`Gabriel`, `Desenvolvedor Fullstack`, 2259)
console.log(funcionario)
console.log(funcionario.calcSalario)