const hamburger = document.querySelector(".hamburger");
const lexendDecaFont = document.querySelector(".lexend-deca-font");
const centerHeader = document.querySelector(".centerHeader");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  lexendDecaFont.classList.toggle("active");
  centerHeader.classList.toggle("active");
})

function SendMail() {
  var params = {
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementsById("message").value
  };

  emailjs.send("service_tlz8uzl", "template_vrttl0i", params).then(alert("Message was sent succesfully!"))
}

function abc(){
  alert("HAHAHAH")
}