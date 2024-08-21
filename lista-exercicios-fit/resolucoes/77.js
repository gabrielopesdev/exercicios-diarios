// criar uma classe chamada funcionario como nome, salário, cargo
// implementar metodos para calcular o salário líquido(considerar desconto de impostos e benefícios)

class Usuario {

    constructor(nome, cargo, salario) {

        this.nome = nome
        this.cargo = cargo
        this.salario = salario

    }

    get calcSalario() {

        if (this.salario <= 2259) {

            var salarioLiguido = this.salario

        } else if (this.salario > 2259 && this.salario <= 2826) {

            var salarioLiguido = this.salario - ((7,5 / 100) * this.salario)

        } else if (this.salario > 2826 && this.salario <= 3751) {

            var salarioLiguido = this.salario - ((15 / 100) * this.salario)

        } else  {

            var salarioLiguido = this.salario - ((22.5 / 100) * this.salario)

        }

        return salarioLiguido
        
    }

}

funcionario = new Usuario(`Gabriel`, `Desenvolvedor Fullstack`, 2259)
console.log(funcionario)
console.log(funcionario.calcSalario)