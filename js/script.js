//ativar links do menu//

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add("ativo");
    }
}


links.forEach(ativarLink)

//ativar links do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
    console.log(parametro);
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("Aria-controls");
    const resposta = document.getElementById(controls);
    
    
    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded","true");
    
    
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click",ativarPergunta)
}
    

perguntas.forEach(eventosPerguntas)