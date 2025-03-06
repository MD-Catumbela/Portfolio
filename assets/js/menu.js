let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('abrir-menu'); // Alterna a classe ao clicar
});


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu'); // Alterna a classe ao clicar
});


