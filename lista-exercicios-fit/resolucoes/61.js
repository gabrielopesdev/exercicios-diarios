// ler 10 notas
// realizar a media aritimética delas

notas = [10, 6, 7, 4, 7, 5, 9, 10, 6, 7, 3, 6, 10, 10, 4, 4]

function calcMedia(notas) {

    somatorio = 0

    for(i = 0; i < notas.length; i++) {

        somatorio += notas[i]

    }


    media = somatorio / notas.length
    
    return media

}

media = calcMedia(notas)
console.log(media)