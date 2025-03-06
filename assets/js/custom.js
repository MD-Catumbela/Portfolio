var swiper = new Swiper(".especialidades-slider", {
    slidesPerView: 6, // Para telas grandes
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerGroup: 1,

    breakpoints: {
        1020: { // Quando a tela for 1020px ou menor
            slidesPerView: 3, // Exibe apenas 3 slides
        },
        768: { // Para tablets menores
            slidesPerView: 3,
        },
        480: { // Para celulares
            slidesPerView: 3,
        }
    }
});



