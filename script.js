document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize EmailJS
    emailjs.init("YTSCRTO7mOVSLhVXb9"); // Replace with your EmailJS user ID

    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        emailjs.send("service_gr76gij", "template_82s7ool", data)
            .then(response => {
                alert('Email sent successfully!');
                form.reset(); // Clear the form
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending email.');
            });
    });

    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const slideUpElements = document.querySelectorAll('.slide-in-up');

    fadeElements.forEach(el => el.classList.add('fade-in'));
    slideLeftElements.forEach(el => el.classList.add('slide-in-left'));
    slideRightElements.forEach(el => el.classList.add('slide-in-right'));
    slideUpElements.forEach(el => el.classList.add('slide-in-up'));
});
