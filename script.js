const btnCripto = document.querySelector(".btn-cripto");
const btnDescripto = document.querySelector(".btn-descripto");
const textoDigitado = document.querySelector(".entrada-texto textarea");
const msgErro = document.querySelector(".msg-erro");
const displayNone = document.querySelectorAll(".display-none");
const displayBlock = document.querySelectorAll(".display-block");
const btnCopiar = document.querySelector(".copiar");
//Regex para validar se as letras são minusculas e sem acentuação
const regex = /^[a-z\s]+$/;

//Função para criptografar o texto digitado
function criptografar(){
    if(regex.test(textoDigitado.value)){
        const textoCripto = textoDigitado.value
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('u', 'ufat')
            .replaceAll('o', 'ober')

        mudaDisplay();
        document.querySelector(".resultado textarea").innerHTML = textoCripto;
        msgErro.style.display = "none";
        textoDigitado.value = "";
        btnCopiar.innerHTML = "Copiar texto";
    }else{
        msgErro.style.display = "block";
        msgErro.innerHTML = "Não foi possível criptografar este texto, verifique-o e tente novamente!";
    }
}

//Função para descriptografar o texto digitado
function descriptografar(){
    if(regex.test(textoDigitado.value)){
        const textoDescripto = textoDigitado.value
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ufat', 'u')
            .replaceAll('ober', 'o')

        mudaDisplay();
        document.querySelector(".resultado textarea").innerHTML = textoDescripto;
        msgErro.style.display = "none";
        textoDigitado.value = "";
        btnCopiar.innerHTML = "Copiar texto";
    }else{
        msgErro.style.display = "block";
        msgErro.innerHTML = "Não foi possível descriptografar este texto, verifique-o e tente novamente!";
    }
}

function mudaDisplay(){
    displayNone.forEach(elemento => {
        //console.log(elemento.classList.replace("display-none", "display-block"))
        console.log(elemento)
        if(elemento.classList[1] === "none"){
            elemento.classList.replace("display-none", "display-block")
        }else{
            elemento.classList.replace("display-none", "display-block")
        }
    })
    displayBlock.forEach(elemento => {
        //console.log(elemento.classList.replace("display-none", "display-block"))
        console.log(elemento)
        if(elemento.classList[1] === "block"){
            elemento.classList.replace("display-block", "display-none")
        }else{
            elemento.classList.replace("display-block", "display-none")
        }
    })
}

function copiarTexto(){
    navigator.clipboard.writeText(document.querySelector(".resultado textarea").value);
    btnCopiar.innerHTML = "Texto copiado";
}

btnCopiar.addEventListener("click", copiarTexto)
btnDescripto.addEventListener("click", descriptografar);
btnCripto.addEventListener("click", criptografar);
