const marcelo = {
    idade: 20,
    tamanho: '1.80m',
    nome: 'Marcelo',
    
    descrever: function () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} `)
    }

}

marcelo.descrever();