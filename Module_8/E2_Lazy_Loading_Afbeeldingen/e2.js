'use strict';

const images = document.querySelectorAll(".lazy-image");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy-image");
            obs.unobserve(img);
        }
    });
}, {
    rootMargin: "100px"
});

images.forEach(img => observer.observe(img));