document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");

    let currentIndex = 0;
    const totalImages = images.length;
    const slideWidth = images[0].clientWidth;

    function slideNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    setInterval(slideNext, 3000); // Change slide every 3 seconds (adjust as needed)
});
