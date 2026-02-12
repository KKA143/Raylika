//JS TIME


//Slider Function
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
    intervalId = setInterval(nextSlide, 5000);
});

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentSlide = index;

    slides.forEach(slide =>
        slide.classList.remove("displaySlide")
    );
    slides[currentSlide].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide - 1);
}

function nextSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide + 1);
}