document.addEventListener("DOMContentLoaded", () => {
  // --- 1. FITUR POP-UP PROMO ---
  const modal = document.getElementById("promoModal");

  if (modal) {
    // Muncul otomatis setelah 3 detik
    setTimeout(() => {
      modal.style.display = "block";
    }, 3000);
  }

  // --- 2. FITUR DARK MODE ---
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        darkModeToggle.innerHTML = "🌙";
      } else {
        body.setAttribute("data-theme", "dark");
        darkModeToggle.innerHTML = "☀️";
      }
    });
  }

  // --- 3. FITUR ANIMASI SCROLL (REVEAL) ---
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150; // Animasi muncul saat elemen 150px dari bawah layar

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  // Jalankan reveal saat pertama kali buka & saat di-scroll
  window.addEventListener("scroll", reveal);
  reveal(); // Cek posisi saat halaman baru dibuka
});

// --- 4. FUNGSI GLOBAL (Bisa dipanggil langsung dari HTML) ---

// Fungsi Tutup Modal
function closeModal() {
  const modal = document.getElementById("promoModal");
  if (modal) modal.style.display = "none";
}

// Fungsi Search Produk
function filterProduk() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector("h3").innerText.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
