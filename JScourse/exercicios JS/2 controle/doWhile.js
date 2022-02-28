function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do
{
    {
        opcao = getInteiroAleatorioEntre(-1, 10)
        console.log(`opcao escolhida foi ${opcao}.`)
    }
console.log('ate a proxima')
}while(opcao != 0)