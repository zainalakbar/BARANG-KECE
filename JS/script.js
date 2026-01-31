// pesan saat halaman dimuat
const modal = document.getElementById("promoModal");
const closeBtn = document.querySelector(".close-btn");

window.onload = function () {
  this.setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};

function closeModal() {
  modal.style.display = "none";
}

closeBtn.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
