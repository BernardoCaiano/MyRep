let imagens = []

window.onload = function() {

    imagens.push("http://img.viralpatel.net/2014/07/yeoman-logo.png")
   
    let btnRemover = document.getElementById("btnRemover")
    let btnRemoverTodos = document.getElementById("btnRemoverTodos")
    let txtUrl = document.getElementById("txtUrl")
    let imgPlace = document.getElementById("imgPlace")
    let frmAdicionarImagem = document.getElementById("frmAdicionarImagem")
    
    frmAdicionarImagem.addEventListener("submit", function(event){
       
        imagens.push(txtUrl.value)
        carregarImagens()
        frmAdicionarImagem.reset()
        btnRemover.disabled = false
        btnRemoverTodos.disabled = false
        event.preventDefault()

    })

    btnRemover.addEventListener("click", function(event){

        imagens.splice(0,1)
        carregarImagens()
        if (imagens.length == 0) {
            btnRemover.disabled = true
            btnRemoverTodos.disabled = true
        }
        event.preventDefault()

    })

    btnRemoverTodos.addEventListener("click", function(event){

        imagens.splice(0,imagens.length)
        carregarImagens()
        btnRemover.disabled = true
        btnRemoverTodos.disabled = true
        event.preventDefault()

    })

    function carregarImagens() {
        let strHtml = ""
        for (let i = 0; i < imagens.length; i++) {
            strHtml += `<img src="${imagens[i]}" width="374" height="324">`
        }
        imgPlace.innerHTML = strHtml
    }

}