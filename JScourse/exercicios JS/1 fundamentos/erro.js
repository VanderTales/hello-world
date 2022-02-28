function tratarErroELancar(erro)
{
    /*throw new erros[...]
    throw 10
    throw false
    throw "messagem"

    throw
    {
        nome: erro.name,
        msg : erro.message,
        date : new date
    }
    */
}
function imprimirNomeGritado(obj)
{
    try
    {
        console.log(obj.nome.toUpperCase() + "!!!")

    }
    catch(e)
    {
        tratarErroELancar(e)
    }
    finally
    {
        console.log("final")
    }
}

const obj = 
{
    nome: "roberto"
}
imprimirNomeGritado(obj)