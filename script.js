/* const lexendDecaFont = document.querySelector(".lexend-deca-font");
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


 */




const sideMenu = document.querySelector(".lexend-side");
const hamburger = document.querySelector(".hamburger");
const menuItems = sideMenu.querySelectorAll("a");

let isMenuOpen = false;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (!isMenuOpen) {
    sideMenu.classList.add("show");
    document.body.classList.add("no-scroll");
    isMenuOpen = true;
  } else {
    sideMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
    isMenuOpen = false;
  }
});

// Close menu when link is clicked
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sideMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
    isMenuOpen = false;
  });
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
