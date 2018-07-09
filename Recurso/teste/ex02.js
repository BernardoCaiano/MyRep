window.onload = function() {

    let txtArrayNumerico = document.getElementById("txtArrayNumerico")
    let txtValorNumerico = document.getElementById("txtValorNumerico")
    let txtFinal = document.getElementById("txtFinal")
    let btnMedia = document.getElementById("btnMedia")
    
    btnMedia.addEventListener("click", function(){

        let numeros = txtArrayNumerico.value.split(",")
        let soma =0, cont = 0
        
        for (let i = 0; i < numeros.length; i++) {
            if (parseInt(numeros[i]) > parseInt(txtValorNumerico.value)) {
                soma += parseInt(numeros[i])
                cont ++
            }
        }

        let media = soma / cont 
       
        //txtFinal.innerHTML = media
        txtFinal.setAttribute("value",media)

    })
    
}