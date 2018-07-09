window.onload = function() {

    let txtNomeCompleto = document.getElementById("txtNomeCompleto")
    let btnConverter = document.getElementById("btnConverter")
    let txtNomeConvertido = document.getElementById("txtNomeConvertido")

    btnConverter.addEventListener("click",function(){

        let stringNome = txtNomeCompleto.value.split(" ")
        
        let str=""
        for(let i=0; i < stringNome.length; i++){

          if(i != stringome.length-1){
            str += stringNome[i].substring(0,1) + ". "
          }

        }

        str += stringNome[stringNome.length-1]
        txtNomeConvertido.innerHTML = str
    })
}