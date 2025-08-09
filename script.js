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

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100; // height of header
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;

        // Check if target is above current scroll position (scrolling up)
        const offsetPosition = (elementPosition < window.pageYOffset)
            ? elementPosition - headerOffset // scrolling up
            : elementPosition; // scrolling down

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
