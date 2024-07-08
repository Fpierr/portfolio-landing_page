let currentIndex = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel .feature');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);

// Show video
const modal = document.getElementById("videoModal");
const btn = document.getElementById("showApplicationButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    const video = document.getElementById("appVideo");
    video.play();
}

span.onclick = function() {
    modal.style.display = "none";
    const video = document.getElementById("appVideo");
    video.pause();
    video.currentTime = 0;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        const video = document.getElementById("appVideo");
        video.pause();
        video.currentTime = 0;
    }
}
