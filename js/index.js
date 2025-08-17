
const navIcon = document.getElementById('nav-icon4');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        const dropdownContent = toggle.nextElementSibling;

        toggle.addEventListener('click', (e) => {
            e.preventDefault();

            // Tutup semua dropdown lain dulu
            document.querySelectorAll('.dropdown-content.show').forEach(content => {
                if (content !== dropdownContent) content.classList.remove('show');
            });

            // Toggle dropdown yg diklik
            dropdownContent.classList.toggle('show');
        });
    });

    // Klik di luar => nutup semua
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content.show').forEach(content => {
                content.classList.remove('show');
            });
        }
    });
});

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open');
    mobileOverlay.classList.toggle('show');
    mobileMenu.classList.toggle('show');
});

mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
        navIcon.classList.remove('open');
        mobileOverlay.classList.remove('show');
        mobileMenu.classList.remove('show');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slides .slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000); // ganti slide setiap 5 detik
});




const revealElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
const triggerPoint = window.innerHeight * 0.9;

revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
    el.classList.add('active');
    }
});

    // Tutup mobile menu setelah klik link
document.querySelectorAll('.mobile-menu nav a').forEach(link => {
  link.addEventListener('click', () => {
    navIcon.classList.remove('open');
    mobileOverlay.classList.remove('show');
    mobileMenu.classList.remove('show');
  });
});


  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);




