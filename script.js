const btnCripto = document.querySelector(".btn-cripto");
const btnDescripto = document.querySelector(".btn-descripto");
const textoDigitado = document.querySelector(".entrada-texto input");
const msgErro = document.querySelector(".msg-erro")

//Regex para validar se as letras são minusculas e sem acentuação
const regex = /^[a-z\s]+$/;

//Função para criptografar o texto digitado
function criptografar(){
    if(regex.test(textoDigitado.value)){
        const textoCripto = textoDigitado.value
            .replaceAll('a', 'ai')
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat')
        document.querySelector(".resultado textarea").innerHTML = textoCripto;
        msgErro.style.display = "none";
        textoDigitado.value = "";
    }else{
        msgErro.style.display = "block";
        msgErro.innerHTML = "Não foi possível criptografar este texto, verifique-o e tente novamente!";
    }
}

//Função para descriptografar o texto digitado
function descriptografar(){
    if(regex.test(textoDigitado.value)){
        const textoDescripto = textoDigitado.value
            .replaceAll('ai', 'a')
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u')
        document.querySelector(".resultado textarea").innerHTML = textoDescripto;
        msgErro.style.display = "none";
        textoDigitado.value = "";
    }else{
        msgErro.style.display = "block";
        msgErro.innerHTML = "Não foi possível descriptografar este texto, verifique-o e tente novamente!";
    }
}

btnDescripto.addEventListener("click", descriptografar);
btnCripto.addEventListener("click", criptografar);
