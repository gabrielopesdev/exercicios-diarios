// ler o numero de alunos existentes em uma sala de aula
// calcular a media das notas de cada aluno

alunos = [

    gabriel = [10, 7, 6, 7],
    marcos = [9, 7, 6, 3],
    vinico = [2, 7, 7, 10],
    carlos = [5, 7, 7, 7]

]

mediaDosAlunos = []

function lerAlunos(alunos) {

    console.log(`O número de alunos nesta turma é de ${alunos[alunos.length]}`)

}

function calcMedia(aluno) {

    soma = 0

    for(let i = 0; i < aluno.length; i++) {

        soma += aluno[i]
    }
    
    var media = soma / aluno.length

    return media

}

function calcularMedias(alunos) {

    alunos.forEach(aluno => {

        media = calcMedia(aluno)
        mediaDosAlunos.push(media)

    })

    console.log(mediaDosAlunos)
}

lerAlunos(alunos)
calcularMedias(alunos)
