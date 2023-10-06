function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso'
    }
    else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal'
    }
    else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'
    }
    else if (imc >= 30 && imc < 40) {
        return 'abaixo do peso'
    }
    else {
        return 'Gordão dos foguete'
    }
}

(function main() {
    const peso = 800
    const altura = 1.82
    const imc = calcularImc(peso, altura)

    console.log("O seu imc é: " + imc.toFixed(2) + " e o resultado foi: " + classificarImc(imc))
})();

