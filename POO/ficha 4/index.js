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
        nota: 12
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
        show("ii) -> antes: " + estudante.nota)
        delete estudante.nota
        show("       depois: " + estudante.nota)
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
//Alinea B
function funcB() {
    show("B:")
    let notas = [
        {
        nome: 'Rui',
        nota: 8
        },
        {
        nome: 'Ana',
        nota: 12
        },
        {
        nome: 'Carla',
        nota: 14
        }
    ] 
    //alinea i)
    let nome = prompt("Indique o nome:")
    let nota = parseInt(prompt("Indique a nota:"))
    let teste = {nome, nota}
    notas.push(teste)
    //alinea ii)
    function media() {
        let soma = 0
        let media = 0
        let cont = 0
        for (let i = 0; i < notas.length; i++){
           soma += notas[i].nota
           cont++
        }
        media = soma / cont
        show("média: " + media)
    }
    //alinea iii)
    function positivas() {
        let cont2 = 0
        let resposta = ""
        for (let i = 0; i < notas.length; i++){
            if (notas[i].nota >= 10){
                if (cont2 > 0){
                    resposta += ", " + notas[i].nome 
                    
                } 
                else {
                    resposta += notas[i].nome
                }
                cont2++
            }
        }
        show("Notas positivas a POO: " + resposta)
    }
    media()
    positivas()
}    
//Alinea C
function funcC() {
    function Carro(marca, matricula, cor, depositoAtual, tipoCombustivel )  {
        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.depositoAtual = depositoAtual
        this.tipoCombustivel = tipoCombustivel
    }
    //alinea i)
    let carro1 = new Carro("Ford", "91-GH-15", "verde", 40, "Gasóleo")
    let carro2 = new Carro("Opel", "23-AB-23", "branco", 50, "Gasolina")
    //alinea ii)
    function cor() {
        carro1.cor = prompt("Qual é a nova cor do Ford?")
        carro2.cor = prompt("Qual é a nova cor do Opel?")
        show(carro1.cor)
        show(carro2.cor)
    }
    cor()
    //alinea iii)
    function km() {
        let kmPercorridos = parseInt(prompt("Quantos km percorreu no Ford?"))
        let litrosConsumidos = kmPercorridos * 5 / 100
        show(litrosConsumidos)
    }
    km()
}
function funcD() {
    
}
    