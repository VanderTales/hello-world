//par nome/valor
const saudacao = 'opa' // contexto lexico 1

function exec() 
{
    const saudacao = "falaaa" //contextt lexico 2
    return saudacao    
}
//objetos sao grupos aninhado de pares nom/valor
const cliente = 
{
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco
    {
        logradouro: "rua muito legal",
        numero: 222
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)