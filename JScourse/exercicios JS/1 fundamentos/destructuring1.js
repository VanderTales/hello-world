//novo recurso do ES2015
const pessoa =
{
    nome:"ana",
    idade 42,
    endereco
    {
        logradouro: "rua aaaa",
        numero: 432
    }
}
const{ nome, idade} = pessoa
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco{logradouuro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)