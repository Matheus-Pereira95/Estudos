let box = document.querySelector('div#box')
let txt = document.querySelector('p#txtBox')

box.addEventListener('click', function(){
    
    if(box.classList.contains('moverEsquerda')){
        box.classList.remove('moverEsquerda')
    } else{
        box.classList.add('moverEsquerda')
    }
    
})

let span = document.querySelectorAll('span')

for(let c = 0; c<=span.length ; c++ ){
span[c].addEventListener('click', function(){
    
    var conteudo = document.querySelectorAll('p')

    if(conteudo[c].classList.contains('vejaMais')){
        span[c].innerHTML = 'Veja mais'
        conteudo[c].classList.remove('vejaMais')
    } else{
        span[c].innerHTML = 'Ocultar'
        conteudo[c].classList.add('vejaMais')
    }
    
})}