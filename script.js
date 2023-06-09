var openButton = document.querySelector(".open-button");
var ziggyModal = document.getElementById("ziggyModal");

function openZiggy() {
  ziggyModal.classList.add("opacity-100");
  ziggyModal.classList.remove("pointer-events-none");
  ziggyModal.style.bottom = `${openButton.offsetHeight + 20 + 10}px`;
}

function closeZiggy() {
  ziggyModal.classList.remove("opacity-100");
  ziggyModal.classList.add("pointer-events-none");
}
