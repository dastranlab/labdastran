
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

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".event-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // agar animasi hanya sekali
      }
    });
  }, { threshold: 0.2 }); // 20% terlihat baru animasi

  cards.forEach(card => observer.observe(card));
});

/* ===================== TRANSISI SAAT PAGE MASUK ===================== */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ===================== ANIMASI SAAT SCROLL ===================== */
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85; // 85% tinggi layar
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // jalankan saat awal load juga

const certificates = [
  {
    name: "Muthia Rihadatul Aisyi",
    id: "001/WRK/2025",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },
  {
    name: "Alif Pratama",
    id: "002/WRK/2025",
    workshop: "Workshop Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  }
];

function validateCertificate() {
  const inputName = document.getElementById("certNameInput").value.trim().toLowerCase();
  const inputID = document.getElementById("certID").value.trim().toUpperCase();
  const resultBox = document.getElementById("resultBox");
  const certName = document.getElementById("certName");
  const certWorkshop = document.getElementById("certWorkshop");
  const certNomor = document.getElementById("certNomor");
  const downloadLink = document.getElementById("downloadLink");

  // Cek apakah nama dan ID ada di daftar sertifikat
  const found = certificates.find(cert => 
    cert.name.toLowerCase() === inputName && cert.id.toUpperCase() === inputID
  );

  resultBox.style.display = "block";

  if (found) {
    // Sertifikat ditemukan
    resultBox.className = "result success";
    resultBox.style.background = "#f1eee6";
    resultBox.style.border = "1px solid #7B6456";
    certName.textContent = `Nama : ${found.name}`;
    certWorkshop.textContent = `Kegiatan : ${found.workshop}`;
    certNomor.textContent = `Nomor Sertifikat : ${found.id}`;
    downloadLink.href = found.file;
    downloadLink.style.display = "inline-block";
  } else {
    // Tidak ditemukan
    resultBox.className = "result error";
    resultBox.style.background = "#fff0f0";
    resultBox.style.border = "1px solid #f5c2c2";
    certName.textContent = "Sertifikat tidak ditemukan !";
    certWorkshop.textContent = "";
    certNomor.textContent = "";
    downloadLink.style.display = "none";
  }
}


