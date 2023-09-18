let condPagamento = "Parcelado"
let precoNormal = 100
let precoDesconto

function verificaCondicao(){
    if (condPagamento ===  'Débito'){
        console.log(precoDesconto = precoNormal-(precoNormal*0,10))
    }
    else if (condPagamento ===  'Pix'){
        console.log(precoDesconto = precoNormal-(precoNormal*0,15))
    }
    else if (condPagamento ===  'Crédito'){
        console.log(precoNormal)
    }
    else if (condPagamento ===  'Parcelado'){
        console.log(precoDesconto = precoNormal+(precoNormal*0,10))
    }
    
}

verificaCondicao(condPagamento,precoNormal,precoDesconto);