//Escreva um loop que realiza 7 chamadas do comando console.log e exibe o seguinte
//"triângulo":

for (let i = 1; i<8; i++){
    let triangulo = "";
    for(let j = 1; j<i; j++){
        triangulo += "#"
    }
    console.log(triangulo)
}