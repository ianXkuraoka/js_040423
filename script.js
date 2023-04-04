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