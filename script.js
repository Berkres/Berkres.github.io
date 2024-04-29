const hamburger = document.querySelector(".hamburger");
const lexendDecaFont = document.querySelector(".lexend-deca-font");
const centerHeader = document.querySelector(".centerHeader");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  lexendDecaFont.classList.toggle("active");
  centerHeader.classList.toggle("active");
})