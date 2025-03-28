const lexendDecaFont = document.querySelector(".lexend-deca-font");
const centerHeader = document.querySelector(".centerHeader");

const sideMenu = document.querySelector(".lexend-side");
const hamburger = document.querySelector(".hamburger");

const menuItems = sideMenu.querySelectorAll("a");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("active");
});


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


