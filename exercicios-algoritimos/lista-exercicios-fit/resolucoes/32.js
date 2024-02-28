var time01 = {
    nome: "Corinthias",
    gols: 5
}

var time02 = {
    nome: "São Paulo",
    gols: 5
}

if (time01.gols > time02.gols) {

    console.log(`O vencedor da partida foi o ${time01.nome}`)

} else if(time02.gols > time01.gols) {

    console.log(`O vencedor da partida foi o ${time02.nome}`)

} else {

    console.log("a partida empatou")

}

