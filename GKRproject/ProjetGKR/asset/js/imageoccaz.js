window.addEventListener("scroll", function() {
    const image = document.querySelector(".image");
    const container = document.querySelector(".container");
    const imagePosition = image.getBoundingClientRect().top;
    const containerHeight = container.clientHeight;
    
    if (imagePosition < containerHeight) {
        image.classList.remove("hidden");
        image.style.opacity = 1;
    }
});
