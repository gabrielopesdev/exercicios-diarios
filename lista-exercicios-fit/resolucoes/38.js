//escrever um código que valide o nome e senha do usuário respectivamente

dadosUsuarioBD = {
    nome: "Gabriel",
    codigo: 9999,
    senha: "1234"
}

nomeDigitado = "Gabriel"
codigoDigitado = 9999
senhaDigitada = "1234"

if (codigoDigitado != dadosUsuarioBD.codigo) {

    console.log("O usuário digitado não existe")

} else {

    if (senhaDigitada != dadosUsuarioBD.senha) {

        console.log("Senha incorreta")

    } else {

        console.log("Acesso autorizado")

    }

}