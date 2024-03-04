// ler dois valores
// valídar se o segundo valor é zero(utilizando uma estrutura de repetição)
// fazer a divisão do primeiro pelo segundo valor

n1 = window.prompt("Digite um valor...")
n2 = window.prompt("Digíte o segundo valor...")

while(n2 == 0) {

    window.alert("O segundo valor não é válido")
    n2 = window.prompt("Digíte o segundo valor...")

    if (n2 != 0) {
        window.alert("Valor válido")
    }
    
}

resultado = n1 / n2
window.alert(`A divisão entre ${n1} e ${n2} é ${resultado}`)
