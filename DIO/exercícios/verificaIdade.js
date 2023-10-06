function verificarIdade(idade){
    if (idade>=18){
        return 'Maior de idade'
    }else{
        return 'Menor de idade'
    }
}

function main(){
    let idade = 20
    let verificacao = verificarIdade(idade)
    console.log(verificacao)
}

main();