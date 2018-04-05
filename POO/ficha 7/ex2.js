window.onload = function () {
    let frmRunning = document.getElementById("frm")
    frmRunning.addEventListener("submit", function(event) {
        // Criação de variáveis
        let isValidate = true
        let msg = ""

        // 1. Verificar se o campo password é igual ao campo confirmar password
        let txtPass1 = document.getElementById("txtPass1")
        let txtPass2 = document.getElementById("txtPass2")
        if (txtPass1.value != txtPass2.value) {
            isValidate = false
            msg = "Os campos password e confirmar password têm de ser iguais!\n"
        }
        // Submissão final
        if (isValidate) {
            alert("REGISTO EFETUADO COM SUCESSO");       
        } else {
            alert("ERRO: " + msg);
            event.preventDefault()
        }
        
           
    })

}