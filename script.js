//Exemplo de switch
/*
let opcao = parseInt(prompt("digite uma opção entre 1 e 3"))

switch(opcao){
    case 1:
        document.write("primeira opção")
        break;
    case 2:
        document.write("segunda opção")
        break;
    case 3:
        document.write("terceira opção")
        break;
    default:
        document.write("opção inválida")
        break;
}
*/
//Exemplo for

for(let i=0; i <10; i++){
    console.log("Agora i vale "+ i)
}

//Exemplo "para" com array

let carros =["Gol","Fusca","HB20","corsa"]
for(let i=0; i<carros.length; i++){
    console.log(carros[i])
}

// incremento e decremento

let valor = 7
document.write(valor)
document.write("<br><br>")
valor = valor +=4;
valor ++
document.write(valor)
document.write("<br><br>")

let valor2 = 10
document.write(valor2)
valor2 = valor2 -=1
document.write(valor2)
document.write("<br><br>")

//usando for

for(let i=0; i<10; i++){
    document.write("O valor é ", i)
    document.write("<br><br>")
}

//usando for como array

let carros2 =["Gol", "Fusca", "Audi", "Corsa"];
for(let i=0; i <carros.length; i++){
    document.write(carros2[i])
    document.write("<br><br>")
}