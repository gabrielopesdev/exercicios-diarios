valores = [1, -2, 12, -1]
valoresNegativos = []

function lerArray(array) {
    
    array.forEach(x => {
        
        if (x < 0) {

            valoresNegativos.push(x)

        }
    });

    console.log(valoresNegativos)
}

lerArray(valores)
