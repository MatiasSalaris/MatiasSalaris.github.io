// --- 1. TYPEWRITER EFFECT ---
const textElement = document.getElementById('typewriter');
const phrases = ["AI Solutions.", "Scalable Systems.", "Neural Networks.", "Modern Web Apps."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    // Check if element exists to avoid errors on pages without the typewriter
    if (!textElement) return;

    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Delete faster
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Type normal speed
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new phrase
    }

    setTimeout(type, typeSpeed);
}

// Start typing on load
document.addEventListener('DOMContentLoaded', type);


// --- 2. SCROLL REVEAL ANIMATION ---
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));