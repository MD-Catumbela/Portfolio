var swiper = new Swiper(".especialidades-slider", {
    slidesPerView: 6, // Para telas grandes
    spaceBetween: 20, // Reduzi de 30 para 20 para economizar espaço
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerGroup: 1,

    breakpoints: {
        1020: { // Quando a tela for 1020px ou menor
            slidesPerView: 5, // Em vez de 6, exibe 5
        },
        768: { // Para tablets menores
            slidesPerView: 3, // Em vez de 4, exibe 3
        },
        480: { // Para celulares
            slidesPerView: 2, // Mantido em 2
        }
    }
});
