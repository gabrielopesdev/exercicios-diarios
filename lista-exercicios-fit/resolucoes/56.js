// escrever um programa que calcule a tabuada de um número de 1 a 10

x = 2

if (x > 10 || x < 1) {

    console.log("O valor inserido é inválido")

} else {

    for(i = 1; i <= 10; i++) {

        console.log(`${i} X ${x} = ${i * x}`)

    }
    
}