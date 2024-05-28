const hamburger = document.querySelector(".hamburger");
const lexendDecaFont = document.querySelector(".lexend-deca-font");
const centerHeader = document.querySelector(".centerHeader");

/* const darkmodeButton = document.querySelector(".dark-mode-toggle");
const signature = document.querySelector(".signature"); */

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  lexendDecaFont.classList.toggle("active");
  centerHeader.classList.toggle("active");
})

/* darkmodeButton.addEventListener("click", () => {
  signature.classList.toggle("active");
}); */

const form = document.getElementById("form");
form.addEventListener("submit", SendMail);

function SendMail() {
  var params = {
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email-id").value,
      message : document.getElementById("message").value
  };

  emailjs.send("service_tlz8uzl", "template_vrttl0i", params).then(alert("Message was sent successfully!"))
}