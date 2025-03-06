const wrapper = document.getElementById('skills');
let clone = wrapper.innerHTML;
wrapper.innerHTML += clone;

let index = 0;
function moveSlide() {
    index++;
    if (index >= wrapper.children.length / 2) {
        index = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(0px)`;
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s linear';
        }, 50);
    } else {
        wrapper.style.transform = `translateX(${-index * 170}px)`;
    }
}
setInterval(moveSlide, 4000);


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



