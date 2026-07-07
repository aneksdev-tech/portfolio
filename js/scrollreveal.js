// ==========================
// SCROLL REVEAL
// ==========================

const sr = ScrollReveal({
    distance: '70px',
    duration: 500,
    delay: 150,
    easing: 'ease',
    reset: false,
    mobile: true,
});


// Headings
sr.reveal('#navbar, #about-me, #services, #latest-projects', {
    origin: 'top'
});


// Home
sr.reveal('.home-detail', {
    origin: 'bottom'
});

sr.reveal('.home-img', {
    origin: 'bottom'
});


// About
sr.reveal('.about-right', {
    origin: 'bottom'
});

sr.reveal('.about-left', {
    origin: 'top'
});

sr.reveal('.about-img', {
    origin: 'top'
});

sr.reveal('.about-card, .focus-item, .principles, .principle-card', {
    origin: 'bottom',
    interval: 120
});

// Services
sr.reveal('.services-box', {
    origin: 'bottom',
    interval: 120
});


// Resume
sr.reveal('.resume-box:first-child', {
    origin: 'top'
});

sr.reveal('.resume-box:last-child', {
    origin: 'bottom'
});


// Projects
sr.reveal('.projects-container', {
    origin: 'bottom'
});


// Contact
sr.reveal('.contact-box:first-child', {
    origin: 'top'
});

sr.reveal('.contact-box:last-child', {
    origin: 'bottom'
});