const btn = document.querySelector(".ModalBtn");
const Modal = document.querySelector(".Modal__section");
btn.addEventListener("click", () => {
  Modal.classList.toggle("modalActive");
  btn.style.display = "none";
});

const CrossDiv = document.querySelector(".CrossDiv");
CrossDiv.addEventListener("click", () => {
  Modal.classList.toggle("modalActive");
  btn.style.display = "block";
});
