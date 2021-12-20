let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //  Cannot read property 'toString' of null não consegue acessar o que esta nulo

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined de forma explicita
console.log(!!produto.preco)

console.log(produto)

produto.preco = null // sem preço, pode usar o -1, mas nunca usar undefined
console.log(!!produto.preco)
console.log(produto) // programador usar sempre o nulo, deixar para o sistema definir o que é undefined

