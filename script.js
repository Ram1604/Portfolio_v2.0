const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Toggle hamburger visibility
    if (navMenu.classList.contains('show')) {
        hamburger.classList.add('hide');
    } else {
        hamburger.classList.remove('hide');
    }
});

// Optional: close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.classList.remove('hide');
    });
});
// Optional: close menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('show');
        hamburger.classList.remove('hide');
    }
});