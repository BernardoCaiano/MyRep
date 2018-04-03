let show = function(valor) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += valor + "\n"
}
//Alinea A
function funcA() {
    let str = prompt("Insira uma palavra")
    show("A -> " + str.length)
}
//Alinea B
function funcB() {
    let nome = prompt("Insira o seu Nome")
    let apelido = prompt("Insira o seu apelido")
    show("B -> " + apelido + ", " + nome)
}
//Alinea C
function funcC() {
    let palavra = prompt("Insira uma palavra")
    palavra = palavra.toUpperCase()
    let cont = 0
    for (i = 0; i < palavra.length; i++){
        if (palavra[i] == "A" | palavra[i] == "E" | palavra[i] == "I" | palavra[i] == "O" | palavra[i] == "U" ) {
            cont++;
        }
    }
    show("C -> " + cont)
}
//Alinea D
function funcD() {
    let str = prompt("Insira a frase:")
    let cont = 0
    let tamanho = str.length
    if (str[0] != " " ){
        cont = 1
    }
    //if (str[tamanho-1] == " "){
        //cont--
    //}
    for (i = 0; i < str.length; i++){
        if (str[i] == " " & str[i+1] != " ") {
            cont++
        }
    }   
    show("D -> " + cont)
}
//ALinea E
function funcE() {
    let str = prompt("Insira a string:")
    let inversa = ""
    for (let i = str.length-1; i >= 0; i--){
        string += str[i]
    }
    show("E -> " + inversa)
}
//Alinea F
function funcF() {
    let str = prompt("Insira a string:")
    let char = prompt("Indique o caracter a remover:")
    let novaStr = ""
    for (let i = 0; i < str.length;i++)
    {
        if (str[i] != char){
            novaStr += str[i]
        }
    }
    show("F -> " + novaStr ) 
}
//Alinea G 
function funcG() {
    let segundos = parseInt(prompt ("Indique os segundos:"))
    let segundo = parseInt(segundos % 60)
    let minutos  = parseInt(segundos / 60)
    let minuto = parseInt(minutos % 60)
    let hora = parseInt(minutos / 60) 
    show(hora + "h + " + minuto + "m + " + segundo + "s")
}
//Alinea F
function funcH() {
    
}