document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const heroHeader = document.querySelector(".hero-header");

    menuToggle.addEventListener("click", () => {
        heroHeader.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
 heroHeader.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        heroHeader.classList.remove("active");
    });
 });
});

 