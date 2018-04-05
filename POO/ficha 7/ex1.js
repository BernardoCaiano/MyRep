window.onload = function() {

    let frmLogin = document.getElementById("frmLogin")
    let txtEmail = document.getElementById("txtEmail")
    let txtPass = document.getElementById("txtPassword")

    frmLogin.addEventListener("submit", function(event){
        
        alert(txtPass.value + "#" + txtEmail.value )
        event.preventDefault()
    })
    frmLogin.addEventListener("reset", function(){
        
        txtEmail.focus()
    })
}