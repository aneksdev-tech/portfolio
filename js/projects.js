// ==========================
// PROJECTS CAROUSEL
// ==========================

const arrowRight = document.querySelector('.projects-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.projects-box .navigation .arrow-left');

let index = 0;

const activeProject = () => {
    const imgSlide = document.querySelector('.projects-carousel .img-slide');
    const projectsDetails = document.querySelectorAll('.projects-detail');

    imgSlide.style.transform =
        `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectsDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    projectsDetails[index].classList.add('active');

    // button states
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === projectsDetails.length - 1);
};

arrowRight.addEventListener('click', () => {
    const projectsDetails = document.querySelectorAll('.projects-detail');

    if (index < projectsDetails.length - 1) {
        index++;
        activeProject();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activeProject();
    }
});

// initialize
activeProject();
