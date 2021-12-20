// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))

// diminuindo ainda mais com um só parametro

const imprimir = a => console.log(a)
imprimir("Legal!")