window.onload = function() {

    let txtNaoCifrada = document.getElementById("txtNaoCifrada")
    let btnCifrar = document.getElementById("btnCifrar")
    let txtCifrada = document.getElementById("txtCifrada")

    btnCifrar.addEventListener("click", function(){

        str = ""
        strNaoCifrada = txtNaoCifrada.value
        let i = 0
        let j = strNaoCifrada.length-1
        while (i <= j) {
            if (i == j) {
                str +=  strNaoCifrada[i]
            }
            else {
                str += strNaoCifrada[i] + strNaoCifrada[j]
            }
            i++
            j--
        }
        txtCifrada.setAttribute("value", str)
    
    })

}
