const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.navbar__links a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
});

// Cerrar menú automáticamente al hacer clic en cualquier enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        mobileMenu.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});