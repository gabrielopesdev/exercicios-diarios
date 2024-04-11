// leia um array com dez valores
// separe os valores que forem maiores que 10 e menores que 20

valores = [12, 25 , 29, 46, 8, 12, 20, 10]
valoresNoIntervalo = []
valoresForaIntervalo = []

function varrerArray(array) {

    array.forEach(x => {
        
        if(x >= 10 && x <= 20) {

            valoresNoIntervalo.push(x)

        } else {

            valoresForaIntervalo.push(x)

        }

    })

    console.log(valoresNoIntervalo)
    console.log(valoresForaIntervalo)

}

varrerArray(valores)