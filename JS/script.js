// Kita bungkus agar script jalan setelah semua HTML terbaca
document.addEventListener("DOMContentLoaded", () => {
  // --- FITUR POP-UP ---
  const modal = document.getElementById("promoModal");
  const closeBtn = document.querySelector(".close-btn");

  if (modal) {
    setTimeout(function () {
      modal.style.display = "block";
    }, 3000);
  }

  // Fungsi tutup modal (di dalam DOMContentLoaded)
  window.closeModal = function () {
    modal.style.display = "none";
  };

  if (closeBtn) {
    closeBtn.onclick = function () {
      closeModal();
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  // --- FITUR DARK MODE ---
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      // Tambah => di sini
      if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        darkModeToggle.innerHTML = "🌙"; // Tambah = di sini
      } else {
        body.setAttribute("data-theme", "dark");
        darkModeToggle.innerHTML = "☀️"; // Tambah = di sini
      }
    });
  }
});
