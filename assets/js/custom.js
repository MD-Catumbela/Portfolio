// Seleciona o wrapper das habilidades
const wrapper = document.getElementById('skills');
const slides = Array.from(wrapper.children);
const totalSlides = slides.length;

// Clonando os slides para efeito de rolagem contínua
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    wrapper.appendChild(clone);
});

// Inicializa o índice e a largura do slide
let index = 0;
const slideWidth = slides[0].offsetWidth; // Largura do slide

// Função para mover os slides
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

// Define um intervalo para mover os slides a cada 4 segundos
setInterval(moveSlide, 4000);

// Cursor Personalizado
const cursor = document.querySelector('.cursor');

// Atualiza a posição do cursor personalizado com base na posição do mouse
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