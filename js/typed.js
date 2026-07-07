// ==========================
// TYPED JS
// ==========================

document.querySelectorAll('.multiple-text').forEach(el => {
    new Typed(el, {
        strings: [
            'Programmer',
            'Web Developer',
            'UI/UX Designer',
            'Graphic Designer',
            'Product Designer',
            'Brand Designer'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
