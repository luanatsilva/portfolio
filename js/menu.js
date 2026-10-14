let btnMenu = document.getElementById('btn-menu') //barras do menu
let menu = document.getElementById('menu-mobile') //menu

btnMenu.addEventListener('click', () => { //ao clicar nas barras, abre o menu
    menu.classList.add('abrir-menu')
})

//fecha o menu
menu.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})