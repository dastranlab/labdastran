
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


const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".asisten-card");

searchInput.addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();

  cards.forEach(card => {
    // ambil teks dari h3 dan h4 lalu gabung
    const name = card.querySelector(".asisten-info h3").textContent.toLowerCase();
    const fullname = card.querySelector(".asisten-info h4").textContent.toLowerCase();
    const combined = `${name} ${fullname}`;   // gabungan keduanya

    // cek apakah filter cocok dengan gabungan
    if (combined.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
