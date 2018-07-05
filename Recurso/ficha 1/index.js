exercicioA()
exercicioB()
exercicioC()

function exercicioA() {
    let a = document.getElementById("a")
    a.addEventListener("click", function(){
        console.log("OLÁ MUNDO!")
    })
}

function exercicioB() {
    let b = document.getElementById("b")
    b.addEventListener("click", function(){
        let nome = "NOME"
        console.log("OLÁ " + nome + "!")
    })
}

function exercicioC() {
    let c = document.getElementById("c")
    c.addEventListener("click", function(){
        let largura = parseInt(prompt("Indique a largura do retângulo"))
        let comprimento = parseInt(prompt("Indique o comprimento do retângulo"))
        let area = comprimento * largura
        console.log(area)
    })
}

