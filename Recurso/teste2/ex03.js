window.onload = function() {

    let col1 = []
    let col2 = []
    let btnAdicionar = document.getElementById("btnAdicionar")
    let btnRemover = document.getElementById("btnRemover")
    let txtDados = document.getElementById("txtDados")
    let myTable = document.getElementById("myTable")
    
    btnAdicionar.addEventListener("click", function() {
        
        if (txtDados.value.indexOf(";") != -1) {
            let arraySplit = txtDados.value.split(";")
            col1.push(arraySplit[0])
            col2.push(arraySplit[1])
            carregarTabela()
        }

        else {
            col1.push(txtDados.value)
            col2.push("")
            carregarTabela()
        }
        btnRemover.disabled = false

    })

    btnRemover.addEventListener("click", function(event) {

        col1.splice(col1.length-1,1)
        col2.splice(col2.length-1,1)
        carregarTabela()
        if (col1.length == 0) {
            btnRemover.disabled = true
        }
        event.preventDefault()

    })

    function carregarTabela() {

        let strHtml = `<tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr>`
        for (let i = 0; i < col1.length; i++) {
                strHtml += `<tr><td>${col1[i]}</td><td>${col2[i]}</td></tr>`
        }
        myTable.innerHTML = strHtml

    }

}