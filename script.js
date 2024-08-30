document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
