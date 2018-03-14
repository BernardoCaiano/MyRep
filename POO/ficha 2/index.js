let show = function(valor) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += valor + "\n"
}

function funcA(numeros) {
        let soma = 0
        for(let i = 0; i < numeros.length; i++) {
            soma += numeros[i]
        }
        let media = soma / numeros.length
        show("A -> " + media)   
}

function funcB(numeros) {
    let menor = numeros[0]
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }  
    show("B -> " + menor )
}

function funcC(numeros, n) {
    let resultado = removeNumber(numeros, n)
    show("C -> " + resultado)
}
    
