 window.onload = function() {
     aoCarregar()
 }
 function aoCarregar() {
    let texto = document.getElementById("p1")
    texto.innerHTML = "Bem-vindo à minha página!"
    let butao = document.getElementById("butao")
    butao.addEventListener("click", function() {
        let nome = document.getElementById("texto")        
        if (nome.value != "") {
            texto.innerHTML = "Bem-vindo, " + nome.value + "!"            
        } else {
            texto.innerHTML = "Bem-vindo à minha página!"            
        }
    })
 }
 
    
 