window.onload = function() {

    let txtArrayStrings = document.getElementById("txtArrayStrings")
    let txtArrayNumerico = document.getElementById("txtArrayNumerico")
    let btnJuntar = document.getElementById("btnJuntar")
    let txtStringFinal = document.getElementById("txtStringFinal")

    btnJuntar.addEventListener("click", function(){

        let arrayStr = txtArrayStrings.value.split(",")
        let arrayNum = txtArrayNumerico.value.split(",")
        let strFinal = ""
        
        for (let i = 0; i < arrayStr.length; i++) {
            for (let j = 0; j < arrayNum[i]; j++) {
                strFinal += arrayStr[i]
            }  
        }
        txtStringFinal.setAttribute("value", strFinal)

    })

}