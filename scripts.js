let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function ejecutarSlider() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(ejecutarSlider, 4000);
