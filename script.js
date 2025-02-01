let currentSlide = 0;
const slides = document.querySelectorAll('.hero .slide');
const totalSlides = slides.length;

function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.hero .slides').style.transform = `translateX(-${100 * currentSlide}vw)`;
}

setInterval(changeSlide, 10000); // Change slide every 3 seconds

