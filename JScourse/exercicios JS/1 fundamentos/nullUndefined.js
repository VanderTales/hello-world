let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) da erro

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.50
console.log(prod)
prod.preco = undefined //evite atribuir undefined
console.log(prod.preco)
//delete prod.preco
console.log(prod)
prod.preco = null // sem preco
console.log(!prod.preco)
console.log(prod)