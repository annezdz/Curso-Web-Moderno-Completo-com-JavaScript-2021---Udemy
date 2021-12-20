function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // retorna NaN
imprimirSoma(1,2,3,4) // vai pegar apenas os 2 primeiros valors, desconsiderando o restante
imprimirSoma() //NaN

function soma (a, b = 0) {
    return a + b;
}
console.log(soma(2,3))
console.log(soma(2))