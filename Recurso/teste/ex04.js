let candidaturas = []

class Candidatura {
    constructor(nome, salarioMin) {
        this.nome = nome
        this.salarioMin = salarioMin
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome        
    }

    get salarioMin() {
        return this._salarioMin
    }

    set salarioMin(novoSalarioMin) {
        this._salarioMin = novoSalarioMin        
    }

}

window.onload = function() {

    let frmCandidaturas = document.getElementById("frmCandidaturas")
    let inputNome = document.getElementById("inputNome")
    let inputSalarioMin = document.getElementById("inputSalarioMin")
    let inputSalarioMax = document.getElementById("inputSalarioMax")
    let btnEscolherCandidato = document.getElementById("btnEscolherCandidato")
    let btnReset = document.getElementById("btnReset")

    btnReset.addEventListener("click", function() {

        frmCandidaturas.reset()
        inputNome.focus()

    })

    frmCandidaturas.addEventListener("submit", function(event) {

        if (inputSalarioMin.value > inputSalarioMax.value) {
            alert("O salário máximo tem de ser superior ao mínimo ")
            frmCandidaturas.reset()
            inputNome.focus()
        }
        else {
            let novaCandidatura = new Candidatura(inputNome.value, inputSalarioMin.value)
            candidaturas.push(novaCandidatura)
            console.log(candidaturas)
        }
        event.preventDefault()
    })

}