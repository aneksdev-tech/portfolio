// Always start pages from the top after reload
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

// ==========================
// NAVBAR & ACTIVE PAGE
// ==========================

const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header .navbar');

// Mobile menu toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Highlight current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});



// ==========================
// RESUME TABS
// ==========================

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        resumeDetails[idx].classList.add('active');
    });
});