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

        let strErro = ""
        if (parseInt(inputSalarioMin.value) > parseInt(inputSalarioMax.value)) {
            strErro = "O salário máximo tem de ser superior ao mínimo."
            
            frmCandidaturas.reset()
            inputNome.focus()
        }
        
        let linguagens = document.querySelectorAll('input[type="checkbox"]:checked').length

        if (linguagens == 0) {
            strErro += "Selecione pelo menos uma linguagem"
        }
       

        if (strErro == "") {
            let novaCandidatura = new Candidatura(inputNome.value, parseInt(inputSalarioMin.value))
            candidaturas.push(novaCandidatura)
            frmCandidaturas.reset()
            inputNome.focus()
            console.log(candidaturas)
        }
        else {
            alert(strErro)
        }

        event.preventDefault()
    })

    btnEscolherCandidato.addEventListener("click", function(event) {
        
        let menorSalario = 0
        let nome = ""
        menorSalario = candidaturas[0].salarioMin
        nome = candidaturas[0].nome
        for (let i = 1; i < candidaturas.length; i++) {
            if (candidaturas[i].salarioMin < menorSalario) {
                menorSalario = candidaturas[i].salarioMin
                nome = candidaturas[i].nome
            }
        }
        alert("O candidato escolhido foi: " + nome)
        event.preventDefault()
    })

    

}