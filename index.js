//alinea A
function funcA() {
    console.log("OLÁ MUNDO!")
}
//Alinea B
function funcB() {
    let nome = "NOME"
    console.log("OLÁ " + nome + "!")
}
//Alinea C
function funcC() {
    let a = prompt("Indique o comprimento do retângulo")
    let b = prompt("Indique a altura do retângulo")
    let area = a * b
    console.log("Área = " + area)
}
//Alinea D
function funcD() {
    let num1 = prompt("Indique um número:")
    let num2 = prompt("Indique um número:")
    let calculo = prompt("Indique o operador a utilizar")
    switch (calculo){
        case "+": console.log(num1 + " + " + num2 + " = " + num1 + num2); break
        case "x": console.log(num1 + " x " + num2 + " = " + num1 * num2); break
        case "*": console.log(num1 + " x " + num2 + " = " + num1 * num2); break
        case "-": console.log(num1 + " - " + num2 + " = " + num1 - num2); break
        case "/": console.log(num1 + " / " + num2 + " = " + num1 / num2); break
        default: console.log("escolha inválida"); break
    }
}
//ALinea E
function funcE() {
    let peso = prompt("Indique o seu peso em kg:")
    let altura = prompt("Indique a sua altura em m:")
    let imc = peso / (altura * altura)
    if (imc < 18.5){
        console.log("Abaixo do peso")
    }
    else if (imc >= 18.5 & imc < 24.9){
        console.log("Peso normal")
    }
    else if (imc >= 24.9 & imc < 29.9){
        console.log("Sobrepeso")
    }
    else if (imc >= 29.9 & imc < 34.9){
        console.log("Obesidade grau I")
    }
    else if (imc >= 34.9 & imc < 39.9){
        console.log("Obesidade grau II")
    }
    else if (imc >= 39.9){
        console.log("Obesidade grau III ou mórbida")
    }
}
//Alinea F
function funcF() {
    let S = prompt("Escreva uma palavra:")
    let N = prompt("Digite um número:")
    for (let i = 0; i < N; i++)
    {
        console.log(S)
    }
}
//Alinea G
function funcG() {
    let a = parseInt(prompt("Digite um número:"))
    let b = parseInt(prompt("Digite um número:"))
    if (a > b){
        console.log("o segundo numero e superior ao primeiro: intervalo inválido.")
        
    }
    else{
        for (let i = a; i < b ;i++){
            console.log(i)
        }
    }
}
//Alinea H
function funcH() {
    let num = parseInt(prompt("Digite um número:"))
    for (let i = 1; i <= 10; i++)
    {
        console.log(num + " x " + i + " = " +  num * i)
    }
}
//Alinea I
function funcI() {
    let a = parseInt(prompt("Digite um número:"))
    let b = parseInt(prompt("Digite um número:"))
    let soma = 0
    if (a > b){
        console.log("o segundo numero e superior ao primeiro: intervalo inválido.")
    }
    else if (b > a){
        for (let i = a; i < b ;i++){
            if (i % 3 == 0){
                soma += i 
            }
        }
    }
    console.log("A soma dos numero que sao multiplos de 3 é: " + soma)
}
//Alinea J
function funcJ() {
    let num = parseInt(prompt("Digite um número:"))
    let cont = 0
    for (let i = num; i > 0; i--){
        if (num % i == 0){
            cont++
        }
    }
    if (cont > 2){
        console.log("NÃO")
    }
    else{
        console.log("SIM")
    }
}
//Alinea K
function funcK() {
    let num = parseInt(prompt("Digite um número:"))
    let resultado = 1
    let cont = 0
    for (let i = num; i > 0; i--){
        cont++
        resultado = resultado * i
    }
    console.log(num + "! = " + resultado)
}
//Ali