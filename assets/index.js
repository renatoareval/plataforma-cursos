const menuHamburguer = document.querySelector('#menu')
const imagemMenu = document.querySelector('.menu-hamburguer img')



function ativarMenu(){
    if(menuHamburguer.classList.toggle('ativo')){
        imagemMenu.setAttribute('src','imgs/close.svg')
    }else{
        imagemMenu.setAttribute('src','imgs/menu.svg')
    }
    
}
