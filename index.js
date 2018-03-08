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
    let imc = peso / altura
}