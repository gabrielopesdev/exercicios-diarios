// receber tres valores (A, B e C)
// calcular D = R + S / 2... onde R = ((A + B) elevado a 2) e S =((B + C) elevado a 2)

D = 0

function calcularD(A, B, C) {

    R = (A + B) ** 2
    S = (B + C) ** 2
    D = (R + S) / 2

    console.log(D)

}

calcularD(2, 3, 4)