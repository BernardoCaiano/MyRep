let array=["http://img.viralpatel.net/2014/07/yeoman-logo.png"]
window.onload = function() {
    
    let imgPlace=document.getElementById("imgPlace")
    let txtUrl=document.getElementById("txtUrl")
    let btnAdicionar=document.getElementById("btnAdicionar")
    let btnRemover=document.getElementById("btnRemover")
    let btnRemoverTodos=document.getElementById("btnRemoverTodos")
    if (array==[])
    {
        btnRemover.setAttribute(disabled, true)
        btnRemoverTodos.setAttribute(disabled, true)
    }
    btnAdicionar.addEventListener("click", function(){
        let imag=txtUrl.value
        array.push(imag)
        let str=""
        for(let i=0;i<array.length;i++){
         str+=`<img src=" ${array[i]}" alt="">`
        }
        imgPlace.innerHTML=str
    })
    btnRemover.addEventListener("click",function(){
        array.splice(array.length-1,1)
        let str=""
        for(let i=0;i<array.length;i++){
            str+=`<img src=" ${array[i]}" alt="">`
           }
           imgPlace.innerHTML=str
           if (array==[])
           {
               btnRemover.setAttribute(disabled, true)
               btnRemoverTodos.setAttribute(disabled, true)
           }

    })
    btnRemoverTodos.addEventListener("click",function(){
        let array=[]
        let str=""
        for(let i=0;i<array.length;i++){
            str+=`<img src=" ${array[i]}" alt="">`
           }
           imgPlace.innerHTML=str
           if (array==[])
           {
               btnRemover.setAttribute(disabled, true)
               btnRemoverTodos.setAttribute(disabled, true)
           }
    })

}