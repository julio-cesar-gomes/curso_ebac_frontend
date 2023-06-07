const form = document.getElementById("form-principal");
const numA = document.getElementById("numero-a");
const numB = document.getElementById("numero-b");
const msgSucesso = document.getElementById("mensagem-sucesso");
const msgErro = document.getElementById("mensagem-erro");
const numeroIgual = document.getElementById("numero-igual")

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(numB.value > numA.valueAsNumber){
        msgSucesso.style.display = "block";

        setTimeout(function() {
            msgSucesso.style.display = "none";
        }, 5000);
    }
    else if(numB.valueAsNumber == numA.value){
        numeroIgual.style.display= "block";

        setTimeout(function() {
            numeroIgual.style.display = "none";
        }, 5000);
    }
    else{
        msgErro.style.display = "block"

        setTimeout(function() {
            msgErro.style.display = "none";
        }, 5000);
    }

})
