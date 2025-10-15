
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
    name: "Muh. Amirul Ramadhanu",
    id: "DASTRAN-WS-10-2526-001",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Kevin Imanuel Saputra Purba",
    id: "DASTRAN-WS-10-2526-002",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Fazza Yuan Ikhwannaya",
    id: "DASTRAN-WS-10-2526-003",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Kharisma Akbar",
    id: "DASTRAN-WS-10-2526-004",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Samuel Chakra Vijaya Lumban Gaol",
    id: "DASTRAN-WS-10-2526-005",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Keisya Fajriani",
    id: "DASTRAN-WS-10-2526-006",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Fiqri Achmad Ardendi",
    id: "DASTRAN-WS-10-2526-007",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Kevin Raihan Adianto",
    id: "DASTRAN-WS-10-2526-008",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Syifa Agnesia ",
    id: "DASTRAN-WS-10-2526-009",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Gabriel Nathan Noel Angelo",
    id: "DASTRAN-WS-10-2526-010",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Salman Al Farisi",
    id: "DASTRAN-WS-10-2526-011",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Muhamad Agisya Cahya Ramadhan ",
    id: "DASTRAN-WS-10-2526-012",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Ana Tasya Putri",
    id: "DASTRAN-WS-10-2526-013",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Yales Nof Romy T. Mendrofa",
    id: "DASTRAN-WS-10-2526-014",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Falisha Salsabila",
    id: "DASTRAN-WS-10-2526-015",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Nabila Sintya Wardhani",
    id: "DASTRAN-WS-10-2526-016",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Fabio Syah Alvin",
    id: "DASTRAN-WS-10-2526-017",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Muhammad Fadhli Afif Al Azizi",
    id: "DASTRAN-WS-10-2526-018",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: " Kayla Nanda Nihan A.P",
    id: "DASTRAN-WS-10-2526-019",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Ghaisan Rabbani ",
    id: "DASTRAN-WS-10-2526-020",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Aldefan Yazdan Attaqee",
    id: "DASTRAN-WS-10-2526-021",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Lutfi Riyani Pratiwi",
    id: "DASTRAN-WS-10-2526-022",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Amirul Haqi Mardistya",
    id: "DASTRAN-WS-10-2526-023",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Mario Stiven Naibaho",
    id: "DASTRAN-WS-10-2526-024",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Daffa Maulana Firdaus",
    id: "DASTRAN-WS-10-2526-025",
    workshop: "Workshop Dastran 2025",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Amirul Haqi Mardistya",
    id: "DASTRAN-WS-10-2526-026",
    workshop: "Workshop Dastran 2025 - Peserta Terbaik",
    file: "https://dastranlaboratory.com/asset/sertifikat_workshop/sertif.pdf"
  },

  {
    name: "Ghaisan Rabbani ",
    id: "DASTRAN-WS-10-2526-027",
    workshop: "Workshop Dastran 2025 - Peserta Terbaik",
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

  // Kalau salah satu input kosong
  if (!inputName || !inputID) {
    alert("Masukkan nama dan nomor sertifikat terlebih dahulu.");
    return;
  }

  // Cek apakah nama dan ID cocok di daftar sertifikat
  const found = certificates.find(cert => 
    cert.name.trim().toLowerCase() === inputName && 
    cert.id.trim().toUpperCase() === inputID
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
    // Sertifikat tidak ditemukan
    resultBox.className = "result error";
    resultBox.style.background = "#fff0f0";
    resultBox.style.border = "1px solid #f5c2c2";

    certName.textContent = "Sertifikat tidak ditemukan!";
    certWorkshop.textContent = "";
    certNomor.textContent = "";
    downloadLink.style.display = "none";
  }
}



