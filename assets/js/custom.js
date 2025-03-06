const wrapper = document.getElementById('skills');
const slides = Array.from(wrapper.children);
const totalSlides = slides.length;

// Clonando os slides para efeito de rolagem contínua
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    wrapper.appendChild(clone);
});

let index = 0;
const slideWidth = slides[0].offsetWidth; // Largura do slide

function moveSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(0px)`;
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s linear';
        }, 50);
    } else {
        wrapper.style.transform = `translateX(${-index * slideWidth}px)`;
    }
}

setInterval(moveSlide, 4000);

// Cursor Personalizado
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efeito de escala no cursor ao passar o mouse
document.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)'; // Aumenta o tamanho do cursor
});

document.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)'; // Retorna ao tamanho original
});