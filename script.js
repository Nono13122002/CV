document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Appliquer l'effet au chargement et au scroll
    revealSections();
    window.addEventListener("scroll", revealSections);
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    menuToggle.classList.toggle('open'); 
});


