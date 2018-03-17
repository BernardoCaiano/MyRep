let show = function(valor) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += valor + "\n"
}
//Alinea A
function funcA() {
    show("A:")
    let resposta = ""
    let cont = 0
    let cont2 = 0
    let estudante = {
        nome: "David Silva",
        curso: "POO",
        ano: 12
    }
    //funçao alinea i)
    function propriedades() {
        for (let i in estudante){
            if (cont2 > 0){
                resposta +=  ", " + i 
                
            } 
            else {
                resposta += i
            }
            cont2++
        }
        show("i) -> " + resposta)
    } 
    //funçao alinea ii)
    function remover() {
        show("ii) -> antes: " + estudante.ano)
        delete estudante.ano
        show("       depois: " + estudante.ano)
    }
    function tamanho() {
        for (let i in estudante){
            cont++
        }    
        show("iii) -> " + cont)
    }
    //resoluçao alinea i)
    propriedades()
    //resoluçao alinia ii)
    remover()
    //resoluçao alinia iii)
    tamanho()
}