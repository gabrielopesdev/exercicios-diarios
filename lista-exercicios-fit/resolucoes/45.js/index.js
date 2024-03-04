//refazer o exercício 44 utilizado 'do while'

n1 = window.prompt("Digíte o um valor...")

do {

    n2 = window.prompt("Digíte um segundo valor...")

    if (n2 == 0) {
        window.alert("O valor digitado não é válido")
    }
    

} while (n2 == 0)

resultado = n1 / n2
window.alert(`A divisão entre ${n1} e ${n2} é ${resultado}`)
