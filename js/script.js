let btn_add =document.querySelector("#btn-add");
let form =document.querySelector("#form");
let nome=document.querySelector("#nome");
let sobrenome=document.querySelector("#sobrenome");
let email=document.querySelector("#email");
let avatar=document.querySelector("#avatar");

let tbody=document.querySelector("tbody");




    
    btn_add.addEventListener("click",function(event){
        /**Não permitir o direcionamento do link */
        event.preventDefault();
        document.querySelector("#form-pessoa").style.display="block";
    })
    
    form.addEventListener("submit", function(event){
        /**Não permitir o submit do formulário */
        event.preventDefault();

        
    })

