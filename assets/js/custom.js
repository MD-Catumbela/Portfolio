var swiper = new Swiper(".especialidades-slider", {
    slidesPerView: 6, // Para telas grandes
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerGroup: 1,

    breakpoints: {
        1024: { // Para telas grandes
            slidesPerView: 5, 
        },
        768: { // Para tablets
            slidesPerView: 4, 
        },
        600: { // Para celulares médios (como o A20s)
            slidesPerView: 3, 
        },
        480: { // Para celulares menores
            slidesPerView: 2, 
        }
    }
});
