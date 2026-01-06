document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling untuk semua link anchor
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Penyesuaian offset karena header fixed
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efek sederhana untuk header saat scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
      
