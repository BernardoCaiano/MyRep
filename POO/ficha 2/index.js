let show = function(valor) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += valor + "\n"
}
//Alinea A
function funcA(numeros) {
    let soma = 0
    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    let media = soma / numeros.length
     show("A -> " + media)   
}
//Alinea B
function funcB(numeros) {
    let menor = numeros[0]
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }  
    show("B -> " + menor )
}
//Alinea C
function funcC(numeros, n) {
    let numeros2 = [] 
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] != n){
            numeros2.push(numeros[i])
        }
    }
    show("C -> " + numeros2 ) 
}
//Alinea D
function funcD(numeros) {
    let string = ""
    for(let i = 0; i < numeros.length; i++){
        string += numeros[i]
    }
    show("D -> " + string )
}
//Alinea E
function funcE(palavras) {
    let ordemAlfabetica = palavras.sort()
    show("E -> " + ordemAlfabetica )
}
//Alinea F
function funcF(palavras) {
    let ordemInversa = palavras.reverse()
    show("F -> " + ordemInversa )
}
//Alinea G
function funcG(palavras) {
    let maior = palavras[0].length
    let maiorString = " "
    for(let i = 0; i < palavras.length; i++){
        let numChar = palavras[i].length
        if (numChar > maior){
            maior = numChar
            maiorString = palavras[i]
        }
        else {
            maiorString = palavras[0]
        }
    }
    show("G -> " +  maiorString )   
}
//Alinea H
function funcH(palavras, S) {
    let cont = 0
    for(let i = 0; i < palavras.length; i++){
        if (palavras[i] == S){
            cont++
        }
    }
    show("H -> " +  cont )
}
//Alinea I
function funcI() {
    let passwords = [1]
    let resultado = 0
    passwords[0] = prompt("Insira a password")
    passwords[1] = prompt("Confirme a password")
    if (passwords[0] == passwords[1]){
        resultado = 1
    }
    else {
        resultado = 0
    }
    show("I -> " +  resultado )
}
//Alinea J
function funcJ(palavras, P) {
    show("J -> " +  palavras[P] )
}
//Alinea K
function funcK() {
    let N = parseInt(prompt("Indique um numero"))
    let numeros = []
    for(let i = 0; i < N-1; i++){
         numeros.push(i)
    }
    show("J -> " +  numeros )
}
//Alinea L
function funcL(numeros) {
    let novoArray = []
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){ 
            novoArray.push(numeros[i])
        }
    }
    show("L -> " + novoArray)
}
//Alinea M 
function funcM(numeros) {
    let novoArray = []
    for(let i = 0; i < numeros.length; i++){
        novoArray.push(numeros[i] + 1)
    }
    show("M -> " + novoArray)
}
//Alinea N
function funcN(numeros, numeros2) {
    let numeros3 = []
    let tamArray = numeros.length
    let tamArray2 = numeros2.length
    if (tamArray2 > tamArray){
        let tamanho = tamArray2 - tamArray
        for(let i = 0; i < numeros2.length; i++){
            numeros.push(0) * tamanho
            numeros3[i] = numeros[i] + numeros2[i]
        }
    }
    else {
        let tamanho = tamArray - tamArray2
        for(let i = 0; i < numeros.length; i++){
            numeros2.push(0) * tamanho
            numeros3[i] = numeros[i] + numeros2[i]
        }
    }
    show("N -> " + numeros3)
}
