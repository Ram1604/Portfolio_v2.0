const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('header');
const headerOffset = header.offsetHeight; // auto-detect height

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

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset; // always subtract header height

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const skillCards = document.querySelectorAll('.skill-category');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

skillCards.forEach(card => observer.observe(card));


const timelineItems = document.querySelectorAll('.timeline-item');

const observerExp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => observerExp.observe(item));


const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => observer.observe(card));


const mainContent = document.querySelector('.main-content');
const menuLinks = document.querySelectorAll('#nav-menu a');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // your existing menu toggle
    mainContent.classList.toggle('blur'); // apply/remove blur
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Close menu immediately
        navMenu.classList.remove('active');

        // Get position with offset
        const yOffset = -90; // navbar height
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        setTimeout(() => {
            mainContent.classList.remove('blur');
        }, 600);
    });
});
