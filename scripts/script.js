let currentIndex = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel .feature');
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    currentIndex = (index + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
}

showSlide(currentIndex);

const modal = document.getElementById("videoModal");
const btn = document.getElementById("showApplicationButton");
const span = document.querySelector(".close");

const closeModal = () => {
    if (modal) modal.style.display = "none";
    const video = document.getElementById("appVideo");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

if (btn && modal) {
    btn.onclick = () => {
        modal.style.display = "block";
        const video = document.getElementById("appVideo");
        if (video) video.play();
    }
}

if (span) {
    span.onclick = closeModal;
}

window.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            showSlide(currentIndex - 1);
            break;
        case "ArrowRight":
            showSlide(currentIndex + 1);
            break;
        case "Escape":
            closeModal();
            break;
    }
});

function sanitizeInput(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}