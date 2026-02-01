document.addEventListener("DOMContentLoaded", () => {
  // Reveal Animation
  const reveal = () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100)
        el.classList.add("active");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();

  // Promo Modal
  setTimeout(() => {
    document.getElementById("promoModal").style.display = "block";
  }, 3000);

  // Dark Mode
  document.getElementById("darkModeToggle").onclick = () => {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme");
      document.getElementById("darkModeToggle").innerText = "🌙";
    } else {
      body.setAttribute("data-theme", "dark");
      document.getElementById("darkModeToggle").innerText = "☀️";
    }
  };
});

function closeModal() {
  document.getElementById("promoModal").style.display = "none";
}
function closeDetail() {
  document.getElementById("detailModal").style.display = "none";
}

function bukaDetail(nama, harga, img, desc) {
  const content = document.getElementById("detailContent");
  content.innerHTML = `
        <img src="${img}" class="detail-img">
        <h2>${nama}</h2>
        <p><strong>Harga: ${harga}</strong></p>
        <p style="margin: 10px 0;">${desc}</p>
        <a href="https://wa.me/6287891444844" target="_blank" class="btn-wa" style="text-align:center">Pesan via WA</a>
    `;
  document.getElementById("detailModal").style.display = "block";
}

function filterProduk() {
  let q = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = c.querySelector("h3").innerText.toLowerCase().includes(q)
      ? "block"
      : "none";
  });
}
