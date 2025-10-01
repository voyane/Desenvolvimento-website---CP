document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const heroHeader = document.querySelector(".hero-header");

    menuToggle.addEventListener("click", () => {
        heroHeader.classList.toggle("active");
    });
});