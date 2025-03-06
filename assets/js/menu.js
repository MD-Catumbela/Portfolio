let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('abrir-menu'); // Alterna a classe ao clicar
});


menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Alterna a classe ao clicar
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Alterna a classe ao clicar
});




