const preçoGasolina = 5.37, preçoEtanol = 3.85;
let distancia = 100, gastoKm = 13.8, tipo = 'Gasolina'

if (tipo === 'Gasolina') {
    console.log(((distancia / gastoKm) * preçoGasolina).toFixed(2) + " " + "Reais")
} else if (tipo === 'Etanol') {
    console.log(((distancia / gastoKm) * preçoEtanol).toFixed(2) + " " + "Reais")
} else {
    console.log("Tipo de combustível invalido")
}